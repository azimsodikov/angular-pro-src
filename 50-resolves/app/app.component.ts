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
            routerLink="folder/inbox"
            routerLinkActive="active">
            Inbox
          </a>
          <a
            routerLink="folder/trash"
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
 *  Resolves preloads the data when you actually navigate to particular route. When you creating the routes object after the component that you want to navigate, you provide
 *  ..resolves object which would be key values as shown inside a route object. We register our created resolves service inside our module.
 *
 *  So when we navigate to that particular route, it will make the calls initialize the properties with the data.
 */
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {}
}
