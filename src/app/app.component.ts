import { Component } from '@angular/core';
import { AngularFireMessaging, SERVICE_WORKER } from '@angular/fire/compat/messaging';
import { BehaviorSubject, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-firebase-notifications';
  
  currentMessage = new BehaviorSubject(null)
  message$: Observable<firebase.messaging.MessagePayload>;

  constructor(public readonly messaging: AngularFireMessaging) {
    this.message$ = messaging.messages;
  }

  public getPermission() {
    this.messaging.requestPermission.subscribe({
      next(value) {console.log(value);},
      error(err) {console.error(err);},
    });
  }

  public requestToken() {
    this.messaging.requestToken.subscribe({
      next(value) {console.log(value);},
      error(err) {console.error(err);},
    });
  }

  public deleteToken() {
    this.messaging.getToken
      .pipe(mergeMap((token) => {
          return this.messaging.deleteToken(token);
        }
      ))
      .subscribe(
        (token) => { console.log('Deleted!'); },
      );
  }

  public listen() {
    console.log('Start listening on foreground message...');
    this.message$.subscribe({
      next(payload) { 
        console.log(payload);
        const notification = new Notification(
          payload.notification.title, {
            body: payload.notification.body,
            icon: '/assets/icons/icon-72x72.png'
          });
        notification.dispatchEvent;
      },
      error(err) { console.error(err);}
    });
  }
}
