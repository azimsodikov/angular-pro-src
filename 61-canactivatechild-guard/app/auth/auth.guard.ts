import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, CanActivateChild } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {
  constructor(private authService: AuthService) {}
  canLoad() {
    return this.authService.checkPermissions();
  }
  canActivate() {
    return this.authService.isLoggedIn();
  }
  canActivateChild() { // With this we can access the mail route but we can not access the child compoenents of the mail route.
    return false;
  }
}
