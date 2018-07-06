import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { MailViewComponent } from './mail-view.component';

@Injectable()
export class MailViewGuard implements CanDeactivate<MailViewComponent> {
  canDeactivate(component: MailViewComponent) {
    if (component.hasUnsavedChanges) { // We are checking whether the messasge is saved in the textarea, if not we gonna display confirm in the browser
      // ..and let the user know that they are about to loose the textarea value.
      return window.confirm('Are you sure you want to leave?');
    }
    return true;
  }
}
