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
 *  In this lesson we are trying to block the user to some routes if they are not logged in or something; To do this we need to implement the
 *  ..canActivate interfase in our AuthGuard class and create a canActivate method. Inside that method we can check whether the user is logged in
 *  ..or not and based on that we can allow the user to that particular route. Both CanLoad or CanActivate interfaces expects observable that will
 *  ..be boolean.
 */
export class AppComponent {}
