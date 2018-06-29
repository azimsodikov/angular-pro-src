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
        <button type="submit">
          Login
        </button>
      </auth-form>
    </div>
  `
})
// Injection slots basically, telling ng-content where to project particular items
// ng-content has a select property, just like a querySelctor, we tell it which node should be projected at particular place
export class AppComponent {

  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

}
