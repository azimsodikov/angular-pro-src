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
// Whenever we want to use dynamic components we need to create one more property on the ngModule of our component
// ..called entry components and basically tell the angular that this particular component might be created later on after code is already compiled.
// To be able to create an component dynamically we need to have an refernce to the element varaible reference,
// ..then we can use that reference to target the through ViewChild, when we target that element we need to pass second argument to the viewChild, and essentially tell it
// ..to give us ViewContainerRef reference.
export class AppComponent implements AfterContentInit {

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(
    // We need resolver to create a component at a paricular place.
    private resolver: ComponentFactoryResolver
  ) {}

  // We use this particular lifecycle hook to make changes to the component data before actually view has been showed

  ngAfterContentInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    const component = this.entry.createComponent(authFormFactory);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

}
