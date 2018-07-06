import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <header>
        <img src="/img/logo.svg">
      </header>
      <div class="app__content">
        <nav>
          <a
            [routerLink]="['/mail', { outlets: { primary: 'folder/inbox', pane: null } }]"
            routerLinkActive="active">
            Inbox
          </a>
          <a
            [routerLink]="['/mail', { outlets: { primary: 'folder/trash', pane: null } }]"
            routerLinkActive="active">
            Trash
          </a>
          <a
            [routerLink]="['/dashboard']"
            routerLinkActive="active">
            Dashboard
          </a>
        </nav>
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
/**
 *  In this lesson we learned how to put blocks dynamically and deactivate according to some value. So when the user tries to navigate away from
 *  ..textarea and textarea has an value, we may warn the user that they will loose the value if they do so. To do so, we need to create mail-view.gurad
 *  ..for this particular component and create a class by implementing CanDeactivate interface, what it does is it will give MailViewComponent instance
 *  ..and we can access the component data. So this CanDeactivate is called when we try to navigate away from the component.
 */
export class AppComponent {}
