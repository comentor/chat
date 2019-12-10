import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as gravatar from 'gravatar'
import { DataService, roomTypes } from './../_services/data.service'
import { AuthService } from './../_services/auth.service'
import { Message, Room, User } from '../_models';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { UserSettingsComponent } from '../user-settings/user-settings.component';

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
  private authUser: any;
  private user: User;
  private emailCommon: string = '';
  private emailPrivate: string = '';
  private apiAdapter: string;
  private audio = {
    message: null,
    group: null
  }
  @ViewChild('scroller', {static: false}) private feedContainer: ElementRef;
  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) {
    this.authService.authUser().subscribe((authUser) => {
      if(authUser) {
        this.authUser = authUser;
        this.avatar = gravatar.url(authUser.email, {default: 'robohash', size: 50});
      } else {
        this.authUser = null;
        this.avatar = null;
      }
    });
    this.authService.userData().subscribe((user) => {
      this.user = new User(user.data());
    });
    this.audio.message = new Audio('./../../assets/sounds/hollow.mp3');
    this.audio.group = new Audio('./../../assets/sounds/worthwhile.mp3');
    this.dataService.getMessages().subscribe(messages => { 
      this.messages = messages; 
      setTimeout(this.scrollToBottom.bind(this), 200); 
      const lastMessage = this.messages[this.messages.length-1];
      if (lastMessage && (new Date()).valueOf() - (new Date(lastMessage.sentAt)).valueOf() < 3000) {
        this.audio.message.play();
      }
    });
    this.dataService.getRooms().subscribe(rooms => { 
      this.rooms = rooms; 
      const roomId = localStorage && localStorage.getItem('roomId');
      if (roomId) {
        this.rooms.forEach((room) => {
          if (room.id === roomId) {
            this.onRoomClick(room);
          }
          const lastRoom = this.rooms[0];
          if (lastRoom && (new Date()).valueOf() - (new Date(lastRoom.createdAt)).valueOf() < 3000) {
            this.audio.group.play();
          }
          return false;
        })
      }
    });
    this.roomTypes = roomTypes;
  }

  async ngOnInit() {
    this.apiAdapter = this.authService.apiAdapter;
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
    if (this.emailPrivate === this.authUser.email) {
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
    this.authService.logout();
    return false;
  }
  openUserSettings() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '320';
    this.dialog.open(UserSettingsComponent, dialogConfig);
  }
  blockMember(email) {
    if (confirm('Are you sure you want to block this user? He will no be able to add you to group chats anymore.')) {
      this.user.addToBlockList(email);
      this.authService.saveUserData(this.user.toJSON());
    }
  }
  getRoomName(room) {
    return room.type === roomTypes.COMMON ? room.name : room.users.find(user => user !== this.authUser.email);
  }
  isAuthor(message) {
    return this.authUser && this.authUser.email === message.sentBy; 
  }
  isCurrentRoom(room) {
    return room === this.room;
  }
  isMe(email) {
    return email === this.authUser.email;
  }
  ifNew(room) {
    return !room.joinedAt[this.authUser.email];
  }
  isMember(email) {
    return this.room.joinedAt[email];
  }
}
