import { Component } from '@angular/core';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <auth-form
        (submitted)="createUser($event)">
        <!-- This is essentially the header element we want our component to show dynamically   -->
        <h3>Create account</h3>
      </auth-form>
      <auth-form
        (submitted)="loginUser($event)">
        <!-- This is essentially the header element we want our component to show dynamically   -->
        <h3>Login</h3>
      </auth-form>
    </div>
  `
})
// Content projection helps us use the same component with slightly different representation
export class AppComponent {

  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

}
