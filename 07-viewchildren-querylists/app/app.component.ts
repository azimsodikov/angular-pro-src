import { Component } from '@angular/core';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <auth-form
        (submitted)="createUser($event)">
        <h3>Create account</h3>
        <button type="submit">
          Join us
        </button>
      </auth-form>
      <auth-form (submitted)="loginUser($event)">
        <h3>Login</h3>
        <auth-remember (checked)="rememberUser($event)"></auth-remember>
        <button type="submit">
          Login
        </button>
      </auth-form>
    </div>
  `
})
// Just like viewChild viewChildren are used to access group of components, and it will hold the reference in the queryList
// One difference is, viewChildren should be only used inside a ngAfterViewInit lifecyclehook
// It works the same as contentChildren, and it has different array methods
// Whenever you encounter an error which says data changed after it was loaded, try to use angulars change detection mechanism, it may solve the problem
export class AppComponent {

  rememberMe: boolean = false;

  rememberUser(remember: boolean) {
    this.rememberMe = remember;
  }

  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user, this.rememberMe);
  }

}
