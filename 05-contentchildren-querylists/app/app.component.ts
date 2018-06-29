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
        <auth-remember (checked)="rememberUser($event)"></auth-remember>
        <auth-remember (checked)="rememberUser($event)"></auth-remember>
        <button type="submit">
          Login
        </button>
      </auth-form>
    </div>
  `
})
// Auth remember component is injected multiple times, so in the form component we can make a query using ContentChildren decorator
// ..that will hold the reference to the all the components that is being projected through content projection
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
