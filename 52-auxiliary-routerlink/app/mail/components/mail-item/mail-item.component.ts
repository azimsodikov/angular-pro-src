import { Component, Input } from '@angular/core';

import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'mail-item',
  styleUrls: ['mail-item.component.scss'],
  template: `
    <a
      class="mail-item"
      [routerLink]="['', { outlets: { pane: ['message', message.id] } }]"
      routerLinkActive="active">
      <!-- When we click this link, we want the router to navigate to this link, and render the mail-view
      component and we gonna pass the message id that we wanna show on that auxilary router through mail-view component.
      The object we are passing through routerLink directly corresponds the route we defined in the module. -->
      <h3>
        {{ message.from }}
        <span>{{ message.timestamp | date:'shortTime' }}</span>
      </h3>
      <p>{{ message.summary }}</p>
    </a>
  `
})
export class MailItemComponent {
  @Input()
  message: Mail;
}
