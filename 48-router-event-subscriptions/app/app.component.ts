import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

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
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.events // We have different events according interaction with the navigation, but we only want our subscribe method to be called when
    // ..we have an event which is a NavigationEnd instance. So this way we can check we are only calling the subscribe when we have a NavigationEnd event.
    // Below filter method is an rxjs method and we need to import that method from the rxjs/add/operator/filter
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        console.log(event);
      });
  }
}
