import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService) {}
  canLoad() { // We are implementing CanLoad interface to implement our authService service to load the module;
    return this.authService.checkPermissions();
  }
}
