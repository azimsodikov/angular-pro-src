import { Component, Output, ViewChild, AfterViewInit, EventEmitter, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

import { AuthRememberComponent } from './auth-remember.component';
import { AuthMessageComponent } from './auth-message.component';

import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content select="h3"></ng-content>
        <label>
          Email address
          <input type="email" name="email" ngModel>
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel>
        </label>
        <ng-content select="auth-remember"></ng-content>
        <auth-message
          [style.display]="(showMessage ? 'inherit' : 'none')">
        </auth-message>
        <!-- Based on the showmessage, it will show or hide the element -->
        <ng-content select="button"></ng-content>
      </form>
    </div>
  `
})
// We can viechChild because component that we are trying to get access actually lives inside this component, not being projected
export class AuthFormComponent implements AfterContentInit, AfterViewInit {

  showMessage: boolean;

  @ViewChild(AuthMessageComponent) message: AuthMessageComponent;
  // ViewChild will hold the reference to the component that is used inside this component

  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  ngAfterViewInit() {
    // this.message.days = 30;
  }

  ngAfterContentInit() {
    if (this.message) {
      this.message.days = 30;
      // Since ngAfterContentInit is called after content is projected, we can change the value of the properties on that component
    }
    if (this.remember) {
      this.remember.forEach((item) => {
        item.checked.subscribe((checked: boolean) => this.showMessage = checked);
      });
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}
