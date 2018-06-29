import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
 * In this lesson we learned how to switch tracing on in the router module and print out our navigation to the console.
 */
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {}
}
