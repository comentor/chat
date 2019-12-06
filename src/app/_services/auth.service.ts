import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable, BehaviorSubject } from 'rxjs';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  private user: Observable<firebase.User>;
  private authState: BehaviorSubject<boolean>;
  public apiAdapter: string = 'CLIENT';
  constructor(
    private fireAuth: AngularFireAuth
    ) {
      if (localStorage && localStorage.getItem('apiAdapter')) {
        this.apiAdapter = localStorage.getItem('apiAdapter');
      }
      this.user = fireAuth.authState;
      this.authState = new BehaviorSubject(false);
      this.user.subscribe((user) => {
        this.authState.next(Boolean(user));
      })
    }
    authUser() {
      return this.user;
    }
    canActivate() {
      return this.authState.value;
    }
    async login(email, password) {
      await this.fireAuth.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
      await this.fireAuth.auth.signInWithEmailAndPassword(email, password);
    }  
    async register(email, password) {
      await this.fireAuth.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
      await this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
    }
    logout() {
      this.fireAuth.auth.signOut();
    }
}
