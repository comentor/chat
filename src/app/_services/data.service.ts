import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service'
import { Message, Room } from './../_models'

export const roomTypes = {
  'COMMON': 'COMMON',
  'PRIVATE': 'PRIVATE'
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  user: any;
  messages: BehaviorSubject<Array<Message>>;
  rooms: BehaviorSubject<Array<Room>>;
  roomId: string;
  private feedSubscription: any;
  private roomSubscription: any;
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
    this.messages = new BehaviorSubject([]);
    this.rooms = new BehaviorSubject([]);
    this.authService.authUser().subscribe(user => {
      if (user) {
        this.user = user;
        this.subsribeToRooms();
      }
    })
  }
  sendMessage(message: string, roomId: string = null) {
    const timestamp = (new Date()).toISOString();
    this.firestore.collection('messages').add({
      text: message,
      sentAt: timestamp,
      sentBy: this.user.email,
      roomId
    });
  }
  createRoom(name, type: string = 'common') {
    const createdAt = (new Date()).toISOString();
    this.firestore.collection('rooms').add(
      {
        name: name,
        createdAt,
        createdBy: this.user.email,
        type: type,
        users: [this.user.email]
      }
    );
  }
  getMessages() {
    return this.messages;
  }
  getRooms() {
    return this.rooms;
  }
  setRoom(roomId) {
    this.roomId = roomId;
    this.subsribeToFeed();
  }
  createPrivate(email: string) {
    this.firestore.collection('rooms').add({
      type: roomTypes.PRIVATE,
      users: [this.user.email, email]
    });
  }
  subsribeToFeed() {
    if (this.feedSubscription) {
      this.feedSubscription.unsubscribe();
    }
    this.feedSubscription = this.firestore.collection('messages', (ref) => {
      let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      query = query.orderBy('sentAt', 'asc');
        if (this.roomId) { query = query.where('roomId', '==', this.roomId); }
          return query;
      }).snapshotChanges().subscribe((data) => {
        const messages = data.map((e) => {
          return <Message> { ...e.payload.doc.data(), id: e.payload.doc.id }
        });
        this.messages.next(messages);
      });
  }
  subsribeToRooms()  {
    if (this.roomSubscription) {
      this.roomSubscription.unsubscribe();
    }
    this.roomSubscription = this.firestore.collection('rooms', (ref) => {
      let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      query = query.where('users', 'array-contains', this.user.email);
			return query;
    }).snapshotChanges().subscribe((data) => {
      const rooms = data.map((e) => {
        return <Room> { ...e.payload.doc.data(), id: e.payload.doc.id }
      });
      this.rooms.next(rooms);
    });
  }
  saveRoom(room) {
    this.firestore.collection('rooms').ref.doc(room.id).set(room);
  }
}
