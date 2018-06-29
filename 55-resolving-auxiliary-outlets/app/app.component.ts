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
 *  Just like we did for the message, we can resolve each message using resolve property inside our route object. We need to create helper class that will resolve the
 *  ..each particular message. That helper class will make the http call and return single message according to id that we passed.
 */
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {}
}
