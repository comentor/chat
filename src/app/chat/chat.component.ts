import { Component, OnInit } from '@angular/core';
import * as gravatar from 'gravatar'
import { DataService } from './../_services/data.service'
import { AuthService } from './../_services/auth.service'
import { Message, Room } from '../_models';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  private message = '';
  private roomName = '';
  private rooms: Array<Room>;
  private messages: Array<Message>;
  private avatar: string;
  private room: Room;
  private feedSubscription: any;
  private user: any;

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
  }

  ngOnInit() {
    this.dataService.getRooms().snapshotChanges().subscribe((data) => {
      this.rooms = data.map((e) => {
        return <Room>{
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      });
    });
  }
  send() {
    this.dataService.sendMessage(this.message, this.room.id);
    this.message = '';
  }
  createRoom() {
    this.dataService.createRoom(this.roomName);
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
  onRoomClick(room) {
    this.room = room;
    this.subscribeToFeed();
  }
  subscribeToFeed() {
    this.messages = [];
    if (this.feedSubscription) {
      this.feedSubscription.unsubscribe();
    }
    this.feedSubscription = this.dataService.getMessages(this.room.id).snapshotChanges().subscribe((data) => {
      this.messages = data.map((doc) => {
        return <Message>doc.payload.doc.data();
      });
      console.log(this.messages);
    });
  }
  logout(event) {
    event.preventDefault();
    this.authService.logout();
    return false;
  }
  isAuthor(message) {
    return this.user && this.user.email === message.sentBy; 
  }
}
