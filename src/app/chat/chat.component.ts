import { Component, OnInit } from '@angular/core';
import * as gravatar from 'gravatar'
import { DataService, roomTypes } from './../_services/data.service'
import { AuthService } from './../_services/auth.service'
import { Message, Room } from '../_models';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

export class ChatComponent implements OnInit {

  private roomTypes = roomTypes;
  private message = '';
  private roomName = '';
  private rooms: Array<Room>;
  private messages: Array<Message>;
  private avatar: string;
  private room: Room;
  private feedSubscription: any;
  private user: any;
  private emailCommon: string;
  private emailPrivate: string;
  constructor(
    private dataService: DataService,
    private authService: AuthService 
  ) { 
    this.authService.authUser().subscribe((user) => {
      if(user) {
        this.user = user;
        this.avatar = gravatar.url(user.email);
      } else {
        this.user = null;
        this.avatar = null;
      }
    });
    this.dataService.getMessages().subscribe(messages => this.messages = messages);
    this.dataService.getRooms().subscribe(rooms => { 
      this.rooms = rooms; 
      const roomId = localStorage && localStorage.getItem('roomId');
      if (roomId) {
        this.rooms.forEach((room) => {
          if (room.id === roomId) {
            this.onRoomClick(room);
          }
          return false;
        })
      }
    });
    // this.roomTypes = roomTypes;
  }

  ngOnInit() {
    // this.dataService.getRooms().snapshotChanges().subscribe((data) => {
    //   this.rooms = data.map((e) => {
    //     return <Room>{
    //       id: e.payload.doc.id,
    //       ...e.payload.doc.data()
    //     };
    //   });
    // });
  }
  send() {
    this.dataService.sendMessage(this.message, this.room.id);
    this.message = '';
  }
  createRoom() {
    this.dataService.createRoom(this.roomName, roomTypes.COMMON);
    this.roomName = '';
  }
  onMessageKeyUp(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.send();
    }
  }
  onRoomKeyUp(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.createRoom();
    }
  }
  onEmailCommonKeyUp(event) {
    if (event.keyCode === 13) {
      this.inviteToRoom();
    }
  }
  onEmailPrivateKeyUp(event) {
    if (event.keyCode === 13) {
      this.createPrivate();
    }
  }
  onRoomClick(room) {
    this.room = room;
    this.dataService.setRoom(room.id);
    localStorage && localStorage.setItem('roomId', this.room.id);
  }
  inviteToRoom() {
    this.room.users.push(this.emailCommon);
    this.dataService.saveRoom(this.room);
    this.emailCommon = '';
  }
  createPrivate() {
    this.dataService.createPrivate(this.emailPrivate);
    this.emailPrivate = '';
  }
  // subscribeToFeed() {
  //   this.messages = [];
  //   if (this.feedSubscription) {
  //     this.feedSubscription.unsubscribe();
  //   }
  //   this.feedSubscription = this.dataService.getMessages(this.room.id).snapshotChanges().subscribe((data) => {
  //     this.messages = data.map((doc) => {
  //       return <Message>doc.payload.doc.data();
  //     });
  //     console.log(this.messages);
  //   });
  // }
  logout(event) {
    event.preventDefault();
    this.authService.logout();
    return false;
  }
  getRoomName(room) {
    return room.type === roomTypes.COMMON ? room.name : room.users.find(user => user !== this.user.email);
  }
  isAuthor(message) {
    return this.user && this.user.email === message.sentBy; 
  }
}
