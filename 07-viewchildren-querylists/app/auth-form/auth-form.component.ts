import { Component, ChangeDetectorRef, Output, ViewChildren, AfterViewInit, EventEmitter, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

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
        <auth-message
          [style.display]="(showMessage ? 'inherit' : 'none')">
        </auth-message>
        <auth-message
          [style.display]="(showMessage ? 'inherit' : 'none')">
        </auth-message>
        <ng-content select="button"></ng-content>
      </form>
    </div>
  `
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {

  showMessage: boolean;

  @ViewChildren(AuthMessageComponent) message: QueryList<AuthMessageComponent>;

  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    if (this.message) {
      this.message.forEach((message) => {
        message.days = 30;
      });
      // We are changing the values after the view is being initialized, thats why we need to somehow
      // .. let the angular know that we mutated the data. we can do it using ChangeDetecterRef API, which has
      // .. detect changes method.
      this.cd.detectChanges();
    }
  }

  ngAfterContentInit() {
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
