import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <div>
      <button (click)="addProp()">Add property</button>
      <button (click)="changeUser()">Change user object</button>
      <button (click)="changeName()">Change name property</button>
      <div class="users">
        <example-one [user]="user"></example-one>
        <example-two [user]="user"></example-two>
      </div>
    </div>
  `
})
/**
 * There two types of change detection strategy, one is push and one is default
 *  default - it will fire the angular change detection every time we update the object, or update the properties of the object
 *  push - it will fire the change detection only the new object is being supplied, then it will fire the change detection, this way
 * ..it is saving some rerendering and boosts the performance of the angular app.
 *
 * The reason we use push strategy is, it follows immutability principle and angular works much faster,
 * ..because it does not need to run change detection every time you change the object also it does not need to check previous and next
 * ..value of the object.
 */
export class AppComponent {
  user: any = {
    name: 'Mark Hoppus',
    age: 44,
    location: 'California'
  };

  addProp() {
    this.user.email = 'blink@blink-182.net';
  }

  changeName() {
    this.user.name = 'Travis Barker';
  }

  changeUser() {
    this.user = {
      name: 'Tom Delonge',
      age: 41,
      location: 'California'
    };
  }
}
