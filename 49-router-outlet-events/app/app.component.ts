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
 *  router-outlet gives us different events such as (activate) or (deactivate) which gets called every time we navigate to that route. It will give us instance of
 *  of a class which get instanciated and on deactivate event it will give an instance of a class which gets destroyed.
 */
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {}
}
