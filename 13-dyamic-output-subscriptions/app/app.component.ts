import { Component, ViewContainerRef, ViewChild, AfterContentInit, ComponentFactoryResolver } from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <div #entry></div>
    </div>
  `
})
// As we access the input properties of the component that we are trying to create, we can do the same with its
// ..output events and subscrube to it.
export class AppComponent implements AfterContentInit {

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver
  ) {}

  ngAfterContentInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    const component = this.entry.createComponent(authFormFactory);
    component.instance.title = 'Create account';
    // Below line are shown to how to subscribe to the output events of the component that we are trying to subscribe.
    component.instance.submitted.subscribe(this.loginUser);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

}
