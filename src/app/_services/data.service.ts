import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service'
import { Message, Room, User } from './../_models'
import { HttpClient } from '@angular/common/http';

export const roomTypes = {
  'COMMON': 'COMMON',
  'PRIVATE': 'PRIVATE'
}
const WEBSOCKET_HOST = location.origin.replace(/^http/, 'ws').replace(/^https/, 'ws');
@Injectable({
  providedIn: 'root'
})
export class DataService {
  authUser: any;
  user: User;
  messages: BehaviorSubject<Array<Message>>;
  rooms: BehaviorSubject<Array<Room>>;
  roomId: string;
  private feedSubscription: any;
  private roomSubscription: any;
  private feedSocket: any;
  private roomSocket: any;
  constructor(
    private authService: AuthService,
    private fireAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private httpClient: HttpClient
  ) { 
    this.messages = new BehaviorSubject([]);
    this.rooms = new BehaviorSubject([]);
    this.authService.authUser().subscribe(authUser => {
      if (authUser) {
        this.authUser = authUser;
        this.subsribeToRooms();
      }
    });
    this.authService.userData().subscribe(user => {
        this.user = new User(user.data());
    })
  }
  getMessages() {
    return this.messages;
  }
  getRooms() {
    return this.rooms;
  }
  async sendMessage(text: string, roomId: string = null) {
    return await this.saveMessage({text, roomId});
  }
  async saveMessage(message) {
    if (!message.id) {
      const sentAt = (new Date()).toISOString();
      message = Object.assign({
        sentBy: this.authUser.email,
        sentAt: sentAt,
        hiddenFor: []
      }, message);
    }
    return await this[`saveMessage${this.authService.apiAdapter}`](message);
  }
  async saveMessageSERVER(message) {
    const res: any = await this.httpClient.post(`//${location.host}/api/message`, {
      data: message, 
      method: 'save'
    }).toPromise();
    if (!res.success) { throw res.errormsg; }
    return res;
  }
  async saveMessageCLIENT(message) {
    const id = message.id || null;
    const ref = this.firestore.collection('messages');
    return await (id ? ref.doc(id).set(message) : await ref.add(message));
  }
  async saveRoomSERVER(room) {
    const res: any = await this.httpClient.post(`//${location.host}/api/room`, {
        data: room,
        method: 'save'
    }).toPromise();
    if (!res.success) { throw res.errormsg; }
    return res;
  }
  async saveRoomCLIENT(room) {
    const id = room.id || null;
    const ref = this.firestore.collection('rooms');
    return await (id ? ref.doc(id).set(room) : await ref.add(room));
  }
  async createRoom(name, type: string = roomTypes.COMMON) {
    await this.saveRoom({
      name, type
    });
  }
  async createRoomCLIENT(name, type: string = 'common') {
    const res = await this.saveRoom({
      name: name,
      type: type
    });
    return res;
  }
  async createPrivate(email: string) {
    await this.saveRoom({
      type: roomTypes.PRIVATE,
      users: [this.authUser.email, email]
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
    room.invitedBy[email] = this.authUser.email;
    return await this.saveRoom(room);
  }
  async leaveRoom(room) {
    room.users = room.users.filter(email => email !== this.authUser.email);
    await this.saveRoom(room);
  }
  async saveRoom(room) {
    if (!room.id) {
      const createdAt = (new Date()).toISOString();
      room = Object.assign({
        createdAt,
        createdBy: this.authUser.email,
        users: [this.authUser.email],
        invitedBy: {},
        joinedAt: {
          [this.authUser.email]: createdAt
        }
      }, room);
    }
    return await this[`saveRoom${this.authService.apiAdapter}`](room);
  }
  setRoom(roomId) {
    this.roomId = roomId;
    let room = this.getRooms().getValue().find(room => roomId === room.id);
    if (!room.joinedAt[this.authUser.email]) {
      room.joinedAt[this.authUser.email] = (new Date()).toISOString();
      this.saveRoom(room);  
    }
    this.subsribeToFeed();
  }

  async hideMessage(message) {
    if (!Array.isArray(message.hiddenFor)) {
      message.hiddenFor = [];
    }
    message.hiddenFor.push(this.authUser.email);
    await this.saveMessage(message);
  }
  subsribeToFeed() {
    return this[`subsribeToFeed${this.authService.apiAdapter}`]();
  }
  subsribeToFeedSERVER() {
    this.messages.next([]);
    if (this.feedSubscription) { this.feedSubscription.unsubscribe(); }
    if (this.feedSocket) { this.feedSocket.close(); }
    if (!this.roomId) {return }
    this.feedSocket = new WebSocket(WEBSOCKET_HOST);
    this.feedSocket.onopen = () => {
      const room = this.getRooms().getValue().find(room => this.roomId === room.id);
      this.feedSocket.send(JSON.stringify({event: 'setRoom', data: {roomId: this.roomId, joinedAt: room.joinedAt[this.authUser.email]}}));
    }
    this.feedSocket.onmessage = (event) => {
      const res = JSON.parse(event.data);
      if(Array.isArray(res.data)) {
        this.messages.next(res.data.filter(message => !message.hiddenFor || !message.hiddenFor.includes(this.authUser.email)));
      }
    }
  }
  subsribeToFeedCLIENT() {
    this.messages.next([]);
    if (this.feedSubscription) { this.feedSubscription.unsubscribe(); }
    if (this.feedSocket) { this.feedSocket.close(); }
    if (!this.roomId) {return }
    this.feedSubscription = this.firestore.collection('messages', (ref) => {
      let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      const room = this.getRooms().getValue().find(room => this.roomId === room.id);
      query = query.orderBy('sentAt', 'asc');
      if (this.roomId) { query = query.where('roomId', '==', this.roomId); }
      if (room && room.joinedAt[this.authUser.email]) { query = query.where('sentAt', '>', room.joinedAt[this.authUser.email]); }
      return query;
    }).snapshotChanges().subscribe((data) => {
      const messages = data.map((e) => {
        return <Message> { ...e.payload.doc.data(), id: e.payload.doc.id }
      }).filter(message => !message.hiddenFor || !message.hiddenFor.includes(this.authUser.email));
        this.messages.next(messages);
      });
  }
  subsribeToRooms()  {
    return this[`subsribeToRooms${this.authService.apiAdapter}`]();
  }
  subsribeToRoomsSERVER() {
    if (this.roomSubscription) { this.roomSubscription.unsubscribe(); }
    if (this.roomSocket) { this.roomSocket.close(); }
    this.roomSocket = new WebSocket(WEBSOCKET_HOST);
    this.roomSocket.onopen = () => {
      this.roomSocket.send(JSON.stringify({event: 'getRooms', data: {email: this.authUser.email}}));
    }
    this.roomSocket.onmessage = (event) => {
      const res = JSON.parse(event.data);
      if(Array.isArray(res.data)) {
        this.rooms.next(res.data);
      }
    }
  }
  subsribeToRoomsCLIENT() {
    if (this.roomSubscription) { this.roomSubscription.unsubscribe(); }
    if (this.roomSocket) { this.roomSocket.close(); }
    this.roomSubscription = this.firestore.collection('rooms', (ref) => {
      let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      query = query.where('users', 'array-contains', this.authUser.email);
      query = query.orderBy('createdAt', 'desc');
			return query;
    }).snapshotChanges().subscribe((data) => {
      const rooms = data.map((e) => {
        return <Room> { ...e.payload.doc.data(), id: e.payload.doc.id }
      }).filter((room) => {
        return !this.user.blockList.includes(room.invitedBy[this.authUser.email])
      });
      this.rooms.next(rooms);
    });
  }
}
