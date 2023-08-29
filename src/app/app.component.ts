import { Component, OnInit } from '@angular/core';
import { AngularFireMessaging, SERVICE_WORKER } from '@angular/fire/compat/messaging';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-firebase-notifications';
  
  // token$: Observable<any>;
  message$: Observable<any>;

  constructor(public readonly messaging: AngularFireMessaging) {
    this.message$ = messaging.messages;
    this.message$.subscribe({
      next(value) {console.log(value);},
      error(err) {console.error(err);},
    });
    // this.messaging.onBackgroundMessage((notification: any) => {
    //     // self.registration.showNotification(title, { body, icon: image || '/assets/icons/icon-72x72.png' });
    //     // self.registration.showNotification(title);
    //     console.log(notification);
    // });
    // this.token$ = messaging.tokenChanges.pipe(
    //   trace('token'),
    //   tap(token => this.showRequest = !token)
    // );
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
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

  public listen() {
    this.message$.subscribe((message) => { 
      console.log(message);
    });
  }
}
