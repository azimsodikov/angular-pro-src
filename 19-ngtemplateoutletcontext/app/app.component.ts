import { Component } from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <ng-container
        [ngTemplateOutlet]="tmpl"
        [ngTemplateOutletContext]="ctx">
      </ng-container>
      <!-- If we want use variable names on this template and pass the value dynamically, we can do so
      with the help of ngTemplateOutletContext variable and pass the object that we created in the component. -->
      <template #tmpl let-name let-location="location">
        {{ name }} : {{ location }}
      </template>
    </div>
  `
})
export class AppComponent {
  ctx = {
    $implicit: 'Todd Motto',
    location: 'England, UK'
  };
}
