import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as gravatar from 'gravatar'
import { DataService, roomTypes } from './../_services/data.service'
import { AuthService } from './../_services/auth.service'
import { Message, Room } from '../_models';
import { ToastrService } from 'ngx-toastr';

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
  private emailCommon: string = '';
  private emailPrivate: string = '';
  @ViewChild('scroller', {static: false}) private feedContainer: ElementRef;
  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private toastr: ToastrService 
  ) { 
    this.authService.authUser().subscribe((user) => {
      if(user) {
        this.user = user;
        this.avatar = gravatar.url(user.email, {default: 'robohash', size: 50});
      } else {
        this.user = null;
        this.avatar = null;
      }
    });
    this.dataService.getMessages().subscribe(messages => { this.messages = messages; setTimeout(this.scrollToBottom.bind(this), 200); });
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

  }
  scrollToBottom() {
    this.feedContainer.nativeElement.scrollTop
    = this.feedContainer.nativeElement.scrollHeight;
  }
  async send() {
    await this.dataService.sendMessage(this.message, this.room.id);
    this.message = '';
  }
  async createRoom() {
    try {
      await this.dataService.createRoom(this.roomName, roomTypes.COMMON);
    } catch (e) {
      this.toastr.error(e);
    }
    this.roomName = '';
  }
  async inviteToRoom() {
    this.emailCommon = this.emailCommon.trim();
    try {
      const res = await this.dataService.inviteToRoom(this.room, this.emailCommon);
      this.toastr.success(`${this.emailCommon} has been added to the room`);
    } catch (e) {
      this.toastr.error(e);
    }
    this.emailCommon = '';
  }
  createPrivate() {
    this.emailPrivate = this.emailPrivate.trim();
    if (this.emailPrivate === this.user.email) {
      this.toastr.error('You cannot invite yourself!');
      return;
    }
    const existed = this.rooms.find((room) => room.type === roomTypes.PRIVATE && room.users.includes(this.emailPrivate));
    if (existed) {
      this.room = existed;
      this.dataService.setRoom(this.room.id);
      this.toastr.info('Conversation already existed');
      return;
    }
    try {
      this.dataService.createPrivate(this.emailPrivate);
      this.toastr.success('Conversation created');
    } catch(e) {
      this.toastr.success(e);
    }
    this.emailPrivate = '';
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
  async leaveRoom() {
    await this.dataService.leaveRoom(this.room);
    this.room = null;
    this.dataService.setRoom(null);
  }
  async hideMessage(message: Message) {
    await this.dataService.hideMessage(message);
  }
  logout() {
    // event.preventDefault();
    this.authService.logout();
    return false;
  }
  getRoomName(room) {
    return room.type === roomTypes.COMMON ? room.name : room.users.find(user => user !== this.user.email);
  }
  isAuthor(message) {
    return this.user && this.user.email === message.sentBy; 
  }
  isCurrentRoom(room) {
    return room === this.room;
  }
  isMe(email) {
    return email === this.user.email;
  }
}
