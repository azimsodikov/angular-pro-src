import { Component, TemplateRef, ComponentRef, ViewContainerRef, ViewChild, AfterContentInit, ComponentFactoryResolver } from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <div #entry></div>
      <template #tmpl let-name let-location='location'>
        {{ name }} : {{ location }}
      </template>
      <!-- When you create a template varaible with a let keyboard, you can change value of that variable
      from the component, use $implicit key to reference to the any keyword that is been created using a let
      keyword, unless it has a predefined key just like location does -->
    </div>
  `
})

export class AppComponent implements AfterContentInit {

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;
  @ViewChild('tmpl') tmpl: TemplateRef<any>;

  ngAfterContentInit() {
    this.entry.createEmbeddedView(this.tmpl, {
      $implicit: 'Motto Todd',
      location: 'UK, England'
    });
  }

}
