import * as fbAdmin from "firebase-admin";
import { ɵConsole } from '@angular/core';
const serviceAccount = require("./../firebase-admin.json");

export class ChatApi {
    private firestore: fbAdmin.firestore.Firestore;
    constructor(private server) {
        fbAdmin.initializeApp({
            credential: fbAdmin.credential.cert(serviceAccount),
            databaseURL: "https://foko-chat.firebaseio.com"
        });
        this.firestore = fbAdmin.firestore();
        const listeningStartedAt = (new Date()).toISOString();
        this.firestore.collection('rooms').onSnapshot(docSnapshot => {
            docSnapshot.docChanges().forEach((change) => {
            });
        }, err => {
            console.log(`Encountered error: ${err}`);
        });
        
        this.firestore.collection('messages').onSnapshot(docSnapshot => {
            docSnapshot.docChanges().forEach((change) => {
                const data = change.doc.data();
                if (data.sentAt > listeningStartedAt) {
                    console.log(`I have to send an email from room ${data.roomId} except by ${data.sentBy}`);
                }
            });
        }, err => {
            console.log(`Encountered error: ${err}`);
        });
    }

    async createRoom(data) {
        const createdAt = (new Date()).toISOString();
        const dataToSave = {
            name: data.name,
            createdAt,
            createdBy: data.sentBy,
            type: data.type,
            users: [data.sentBy],
            joinedAt: {
              [data.sentBy]: createdAt
            }
        }
        const res = await this.firestore.collection('rooms').add(dataToSave);
        return res;
    }

    async sendMessage(data) {
        const sentAt = (new Date()).toISOString();
        const dataToSave = {
            ...data, 
            sentAt: sentAt
        }
        const res = await this.firestore.collection('messages').add(dataToSave);
        return res;
    }
}