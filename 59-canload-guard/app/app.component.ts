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
 *  We are creating the auth module where we have a auth service and auth guard to protect the dashboard module from loading unless the user is a
 *  ..admin. So inside our app.module routes where we are loading our dashboard module, we can put a check canLoad proprerty where we pass our AuthGuard
 *  ..to the array. CanLoad is a one of the many interfaces that router provides to allow or reject the user based on the user's role;
 */
export class AppComponent {}
