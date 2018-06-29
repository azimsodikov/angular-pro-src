import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import 'rxjs/add/operator/filter';

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
            [routerLink]="[{ outlets: { primary: 'folder/inbox', pane: null } }]"
            routerLinkActive="active">
            Inbox
          </a>
          <a
            [routerLink]="[{ outlets: { primary: 'folder/trash', pane: null } }]"
            routerLinkActive="active">
            Trash
          </a>
        </nav>
        <mail-app></mail-app>
      </div>
    </div>
  `
})
/**
 *  When we navigate to other parts of the application, the auxilary route is not disappearing from the url. Thats why we need the way to destroy
 *  ..that route. One way to do it is instead of using static routerLink inside our app.component, use object that will have instructions for navigation
 *  ..and also we pass null for the pane part of the application.
 */
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {}
}
