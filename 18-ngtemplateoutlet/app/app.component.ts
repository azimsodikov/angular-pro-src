import { Component } from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <!-- You can create a placeholder for the template and using ngTemplateOutlet directive, you can
      pass template ref var to tell it render at this particular place, both template and ng-container wont be rendered in the dom. -->
      <ng-container
        [ngTemplateOutlet]="tmpl">
      </ng-container>
      <template #tmpl>
        Todd Motto : England, UK
      </template>
    </div>
  `
})
export class AppComponent {

}
