import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service'
import { Message, Room } from './../_models'
import { HttpClient } from '@angular/common/http';

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
  // private adapter = 'CLIENT';
  private adapter = 'SERVER';
  constructor(
    private authService: AuthService,
    private fireAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private httpClient: HttpClient
  ) { 
    // var HOST = location.origin.replace(/^http/, 'ws')
    // var ws = new WebSocket(HOST);
    // ws.onmessage = function (event) {
    //   console.log(event);
    // };
    this.messages = new BehaviorSubject([]);
    this.rooms = new BehaviorSubject([]);
    this.authService.authUser().subscribe(user => {
      if (user) {
        this.user = user;
        this.subsribeToRooms();
      }
    })
  }
  getMessages() {
    return this.messages;
  }
  getRooms() {
    return this.rooms;
  }
  async sendMessage(message: string, roomId: string = null) {
    return await this[`sendMessage${this.adapter}`].apply(this, arguments);
  }
  async sendMessageSERVER(message: string, roomId: string = null) {
    const timestamp = (new Date()).toISOString();
    const res: any = await this.httpClient.post(`//${location.host}/api/sendMessage`, {
      text: message, roomId, sentBy: this.user.email
    }).toPromise();
    if (!res.success) { throw res.errormsg; }
    return res;
  }
  async sendMessageCLIENT(message: string, roomId: string = null) {
    const sentAt = (new Date()).toISOString();
    this.firestore.collection('messages').add({
      text: message,
      sentAt: sentAt,
      sentBy: this.user.email,
      roomId
    });
  }
  async createRoom(name, type: string = 'common') {
    return await this[`createRoom${this.adapter}`].apply(this, arguments);
    
  }
  async createRoomSERVER(name, type: string = 'common') {
    const res: any = await this.httpClient.post(`//${location.host}/api/createRoom`, {
        name, type, sentBy: this.user.email
    }).toPromise();
    if (!res.success) { throw res.errormsg; }
    return res;
  }
  async createRoomCLIENT(name, type: string = 'common') {
    const createdAt = (new Date()).toISOString();
    const res = await this.firestore.collection('rooms').add(
      {
        name: name,
        createdAt,
        createdBy: this.user.email,
        type: type,
        users: [this.user.email],
        joinedAt: {
          [this.user.email]: createdAt
        }
      }
    );
    return res;
  }
  setRoom(roomId) {
    this.roomId = roomId;
    let room = this.getRooms().getValue().find(room => roomId === room.id);
    if (!room.joinedAt[this.user.email]) {
      room.joinedAt[this.user.email] = (new Date()).toISOString();
      this.saveRoom(room);  
    }
    this.subsribeToFeed();
  }
  async createPrivate(email: string) {
    const createdAt = (new Date()).toISOString();
    await this.firestore.collection('rooms').add({
      type: roomTypes.PRIVATE,
      joinedAt: {
        [this.user.email]: createdAt
      },
      users: [this.user.email, email]
    });
  }
  async inviteToRoom(room, email) {
    if (room.users.length > 10) {
      throw 'The room is full!';
    }
    if (room.users.includes(email)) {
      throw 'The user is already in the room!';
    }
    room.users.push(email);
    return await this.saveRoom(room);
  }
  subsribeToFeed() {
    if (this.feedSubscription) {
      this.feedSubscription.unsubscribe();
    }
    this.feedSubscription = this.firestore.collection('messages', (ref) => {
      let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      const room = this.getRooms().getValue().find(room => this.roomId === room.id);
      query = query.orderBy('sentAt', 'asc');
      if (this.roomId) { query = query.where('roomId', '==', this.roomId); }
      if (room && room.joinedAt[this.user.email]) { query = query.where('sentAt', '>', room.joinedAt[this.user.email]); }
      console.log(query);
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
  async saveRoom(room) {
    const id = room.id || null;
    const result = await this.firestore.collection('rooms').ref.doc(id).set(room);
    return result;
  }
}
