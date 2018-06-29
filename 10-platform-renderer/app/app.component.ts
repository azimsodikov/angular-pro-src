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
// When on the different platforms, you may not have an access to the dom native elements, what you can do instead is use
// .. Angular provided platform renderer service, which will give access to the elements of the dom
// Instead of using native API, use platform renderer to make you app compatible with mobile native apps and so
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
