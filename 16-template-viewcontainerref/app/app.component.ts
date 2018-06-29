import { Component, TemplateRef, ComponentRef, ViewContainerRef, ViewChild, AfterContentInit, ComponentFactoryResolver } from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <div #entry></div>
      <template #tmpl>
        Todd Motto : England, UK
      </template>
    </div>
  `
})
// If we want to create a template dynamically, we can do so by using templateRefs createEmbeddedView method and
// ..pass that particular view we have reference that we have from the DOM.
export class AppComponent implements AfterContentInit {

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;
  @ViewChild('tmpl') tmpl: TemplateRef<any>;

  ngAfterContentInit() {
    this.entry.createEmbeddedView(this.tmpl);
  }

}
