import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  private user: Observable<firebase.User>;
  private authState: BehaviorSubject<boolean>;
  public apiAdapter: string = 'CLIENT';
  private uid: string;
  constructor(
    private fireAuth: AngularFireAuth,
    private firestore: AngularFirestore
    ) {
      if (localStorage && localStorage.getItem('apiAdapter')) {
        this.apiAdapter = localStorage.getItem('apiAdapter');
      }
      this.user = this.fireAuth.authState;
      this.authState = new BehaviorSubject(false);
      this.user.subscribe((user) => {
        this.authState.next(Boolean(user));
        if (user) {
          this.uid = user.uid;
        }
        console.log(user);
      })
    }
    authUser() {
      return this.user;
    }
    userData() {
      return this.firestore.doc(`users/${this.uid}`).get();
    }
    saveUserData(data) {
      return this.firestore.doc(`users/${this.uid}`).set(data);
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
