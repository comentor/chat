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
  private roomName = '';
  private user: Observable<firebase.User>;
  public authState = new BehaviorSubject(false);
  constructor(
    private fireAuth: AngularFireAuth,
    private firestore: AngularFirestore
    ) {
      this.user = fireAuth.authState;
      console.log(this.user);
    }
    authUser() {
      return this.user;
    }
    isAuthenticated() {
      return this.authState.value;
    }
    canActivate() {
      return this.isAuthenticated();
    }
    login(email, password) {
      return this.fireAuth.auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
          console.log(user);
          this.authUser().toPromise().then((data) => {
            console.log(data);
          });
          this.authState.next(true);
          // this.authState = user;
          // this.setUserStatus('online');
          // this.router.navigate(['chat']);
        })
    }  
    logout() {
      this.fireAuth.auth.signOut();
      this.authState.next(false);
    }
    register(email, password) {
      return this.fireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState.next(true);
        // console.log('===register===');
        // console.log(user);
        // this.authState = user;
        // const status = 'online';
        // this.setUserData(email, displayName, status);
      })
    }
}
