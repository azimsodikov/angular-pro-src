import { Component, ComponentRef, ViewContainerRef, ViewChild, AfterContentInit, ComponentFactoryResolver } from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <button (click)="destroyComponent()">
        Destroy
      </button>
      <button (click)="moveComponent()">
        Move
      </button>
      <div #entry></div>
    </div>
  `
})

export class AppComponent implements AfterContentInit {

  component: ComponentRef<AuthFormComponent>;

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver
  ) {}
// If we want certain component to be created in order, createComponent will accept second param as an
//.. index number and tell it where to create this particular component

// Also after compile time, if we want to move a specific compnonent, there is a move method on the
// ..viewContainerRef and we just need to pass in view ref and index where we want to move that view

  ngAfterContentInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    this.entry.createComponent(authFormFactory);
    this.component = this.entry.createComponent(authFormFactory, 0);
    this.component.instance.title = 'Create account';
    this.component.instance.submitted.subscribe(this.loginUser);
  }

  destroyComponent() {
    this.component.destroy();
  }

  moveComponent() {
    this.entry.move(this.component.hostView, 1);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

}
