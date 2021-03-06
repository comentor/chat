import * as fbAdmin from "firebase-admin";
import * as nodemailer from "nodemailer";
import { Server as WSS} from "ws";
import * as _ from "lodash";
const serviceAccount = require("./../firebase-admin.json");

export class ChatApi {
    private firestore: fbAdmin.firestore.Firestore;
    private rooms = [];
    private mailer;

    constructor(private server) {
        fbAdmin.initializeApp({
            credential: fbAdmin.credential.cert(serviceAccount),
            databaseURL: "https://foko-chat.firebaseio.com"
        });
        this.firestore = fbAdmin.firestore();

        

        this.initMailer();
        this.openWebsocket();
        this.subscribeToAllMessages();
        this.subscribeToAllRooms();
    }
    async initMailer() {
        const testAccount = await nodemailer.createTestAccount();
        this.mailer = nodemailer.createTransport({
          host: "smtp.ethereal.email",
          port: 587,
          secure: false,
          auth: {
            user: testAccount.user,
            pass: testAccount.pass
          }
        });
    }
    async sendEmail(sentBy, roomId) {
        const room = this.rooms.find(room => room.id === roomId);
        const receipients = room.users.filter(email => room.joinedAt[email] && email !== sentBy);
        const text = room.type === 'PRIVATE' ? 
            `${sentBy} has sent a private message to you` :
            `${sentBy} has sent a message to a group you joined: ${room.name}`;
        receipients.forEach(email => {
            console.log(email);
            console.log(text);
        });
        try {
            const info = await this.mailer.sendMail({
                from: 'Chat',
                to: receipients.join(', '),
                subject: "You received a message",
                text: text,
                html: text
              });
              console.log("===console.log(info);");
              console.log(info);
        } catch(e) {
            console.log("===mailer error");
            console.log(e);
        }
    }
    subscribeToAllMessages() {
        const debouncedSend = _.debounce(this.sendEmail.bind(this), 2000);
        const listeningStartedAt = (new Date()).toISOString();
        this.firestore.collection('messages').onSnapshot(docSnapshot => {
            docSnapshot.docChanges().forEach((change) => {
                const data = change.doc.data();
                console.log('===change')
                // console.log(change.doc.metadata);
                if (data.sentAt > listeningStartedAt) {
                    debouncedSend(data.sentBy, data.roomId);
                }
            });
        }, err => {
            console.log(`Encountered error: ${err}`);
        });
    }
    subscribeToAllRooms() {
        this.firestore.collection('rooms').onSnapshot(docSnapshot => {
            this.rooms = docSnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
        });
    }
    openWebsocket() {
        const wss = new WSS({ server: this.server });
        wss.on('connection', (ws) => {
            let feedUnsubscribe;
            let roomsUnsubscribe;
            console.log('Client connected');
            ws.on('message', (msg) => {
                msg = JSON.parse(msg);
                switch(msg.event) {
                    case 'setRoom':
                        feedUnsubscribe = this.getFeedSubscriber(msg.data, ws);
                        break;
                    case 'getRooms':
                        roomsUnsubscribe = this.getRoomsSubscriber(msg.data, ws);
                        break;
                }
              });
            ws.on('close', () => {
                console.log('Client disconnected');
                if(feedUnsubscribe) { feedUnsubscribe.call(); }
                if(roomsUnsubscribe) { roomsUnsubscribe.call(); }
            });
        });
    }
    getFeedSubscriber(data: any, ws: any) {
        const ref = this.firestore.collection('messages');
        return ref
            .where('roomId', '==', data.roomId)
            .where('sentAt', '>', data.joinedAt)
            .orderBy('sentAt', 'asc')
            .onSnapshot(docSnapshot => {
                const records = docSnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
                ws.send(JSON.stringify({event: 'newMessages', data: records}));
            });
    }
    getRoomsSubscriber(data: any, ws: any) {
        const ref = this.firestore.collection('rooms');
        return ref
            .where('users', 'array-contains', data.email)
            .orderBy('createdAt', 'desc')
            .onSnapshot(docSnapshot => {
                const records = docSnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
                ws.send(JSON.stringify({event: 'newRooms', data: records}));
            });
    }
    async apiRoom(data, method: string = 'save') {
        const id = data.id || null;
        const ref = this.firestore.collection('rooms');
        switch(method) {
            case 'save':
            default:
                return await (id ? ref.doc(id).set(data) : await ref.add(data));
        }
    }
    async apiMessage(data, method: string = 'save') {
        const id = data.id || null;
        const ref = this.firestore.collection('messages');
        switch(method) {
            case 'save':
            default:
                return await (id ? ref.doc(id).set(data) : await ref.add(data));
        }
    }
}