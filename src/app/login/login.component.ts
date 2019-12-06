import { Component, OnInit } from '@angular/core';
import { AuthService } from './../_services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private email = '';
  private password = '';
  private error = '';
  private adapterApi: string;
  constructor(
    private authService: AuthService
  ) { 
    this.adapterApi = this.authService.apiAdapter;
  }

  ngOnInit() {
  }

  login() {
    this.error = '';
    this.authService.login(this.email, this.password)
      .catch(error => this.error = error);
  }
  register() {
    this.error = '';
    this.authService.register(this.email, this.password)
      .catch(error => this.error = error);
  }
  adapterChange(event) {
    this.authService.apiAdapter = this.adapterApi;
    localStorage && localStorage.setItem('apiAdapter', this.authService.apiAdapter);
  }

}
