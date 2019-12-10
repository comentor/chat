import { Component, OnInit } from '@angular/core';
import { AuthService } from './../_services/auth.service'
import { User } from '../_models';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
  user: User;
  constructor(private authService: AuthService) { 
    this.authService.userData().subscribe((user) => {
      this.user = new User(user.data());
    })
  }
  ngOnInit() {
    
  }
  removeFromBlockList(email) {
    this.user.removeFromBlockList(email);
  }
  save() {
    this.authService.saveUserData(this.user.toJSON());
  }

}
