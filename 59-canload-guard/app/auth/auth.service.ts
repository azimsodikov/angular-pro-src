import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {
  user = { isAdmin: true };// This is the user from some kind of service, and if it is true we allow the user to navigate to the dashboard route;
  checkPermissions() {
    return Observable.of(this.user.isAdmin);
  }
  isLoggedIn() {
    return Observable.of(true);
  }
}
