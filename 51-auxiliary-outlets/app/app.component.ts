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
 *  In this lesson we learned how to display auxiliary (sibling) route next to he router-outlet that we used inside a mail-app component. so when we click
 *  ..specific message, that message will be displayed next to the messages. The way we do that is create a another router-outlet next to the router-outlet which
 *  ..which is displaying the messages and give it name property so we can identify it as a secondary outlet. Then
 */
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {}
}
