import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './auth.service'
import { Message } from './../_models'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  user: any;
  messages: any;
  constructor(
    private authService: AuthService,
    private fireAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) { 
    var HOST = location.origin.replace(/^http/, 'ws')
    var ws = new WebSocket(HOST);
    ws.onmessage = function (event) {
      console.log(event);
    };
    this.authService.authUser().subscribe(user => {
      if (user) {
        this.user = user;
      }
    })
  }
  sendMessage(message: string, roomId: string = null) {
    const timestamp = (new Date()).toISOString();
    this.messages = this.getMessages();
    this.messages.add({
      text: message,
      sentAt: timestamp,
      sentBy: this.user.email,
      roomId
    });
  }
  createRoom(name) {
    const createdAt = (new Date()).toISOString();
    this.firestore.collection('rooms').add(
      {
        name: name,
        createdAt,
        createdBy: this.user.email
      }
    );
  }
  getMessages(roomId: string = null)  {
    return this.firestore.collection('messages', (ref) => {
      let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      query = query.orderBy('sentAt', 'asc');
        if (roomId) { query = query.where('roomId', '==', roomId); }
          return query;
      });
  }
  getRooms()  {
    return this.firestore.collection('rooms', (ref) => {
      const query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
			return Object.assign(query, {
        // limit: 100
      });
    });
  }
  getUsers() {
    const path = '/users';
    // return this.firestore.list
  }
}
