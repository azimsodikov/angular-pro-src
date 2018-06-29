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
// We can access the component properties using the instance propterty on the component
// ..which will give access to all the public properties of the component that we are creating

export class AppComponent implements AfterContentInit {

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver
  ) {}

  ngAfterContentInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    const component = this.entry.createComponent(authFormFactory);
    component.instance.title = 'Create account';
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

}
