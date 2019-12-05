import * as fbAdmin from "firebase-admin";
import { ɵConsole } from '@angular/core';
const serviceAccount = require("./../firebase-admin.json");

export class ChatApi {
    private firestore: fbAdmin.firestore.Firestore;
    constructor(private server) {
        // console.log(this.server);
        fbAdmin.initializeApp({
            credential: fbAdmin.credential.cert(serviceAccount),
            databaseURL: "https://foko-chat.firebaseio.com"
        });
            
        this.firestore = fbAdmin.firestore();
        const listeningStartedAt = (new Date()).toISOString();
        this.firestore.collection('rooms').onSnapshot(docSnapshot => {
        
            docSnapshot.docChanges().forEach((change) => {
                // console.log('======ROOMS');
                // console.log(change.doc.data());
                // console.log(change);
            });
            // console.log(`ROOMS: Received doc snapshot:`);
            // console.log(docSnapshot.changes);
            // console.log(docSnapshot);
            // ...
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
            // console.log(`MESSAGES: Received doc snapshot:`);
            // console.log(docSnapshot.changes);
            // console.log(docSnapshot);
            // ...
        }, err => {
            console.log(`Encountered error: ${err}`);
        });
    }

    async createRoom(data) {
        const createdAt = (new Date()).toISOString();
        const dataToAdd = {
            name: data.name,
            createdAt,
            createdBy: data.sentBy,
            type: data.type,
            users: [data.sentBy],
            joinedAt: {
              [data.sentBy]: createdAt
            }
        }
        const res = await this.firestore.collection('rooms').add(dataToAdd);
        return res;
    }
}