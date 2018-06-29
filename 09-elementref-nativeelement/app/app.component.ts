import { Component } from '@angular/core';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
    <div>
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
// We can basically access the dom elements using a template variable, and it will have nativeElement property where we can override that
// ..element or use different methods available to us on the native element such as ClassList.add or etc.

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
