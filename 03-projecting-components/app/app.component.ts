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
      <auth-form
        (submitted)="loginUser($event)">
        <h3>Login</h3>
        <!-- auth-remember is a component that we want to project to the auth formd -->
        <!-- Inside a ng-content we can select component selecter to project the component at a paticular place -->
        <auth-remember
          (checked)="rememberUser($event)">
        </auth-remember>
        <button type="submit">
          Login
        </button>
      </auth-form>
    </div>
  `
})
// So we can project just a dom node as well as whole component to the ng-content
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
