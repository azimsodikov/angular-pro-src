import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mail } from '../../models/mail.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';

@Component({
  selector: 'mail-folder',
  styleUrls: ['mail-folder.component.scss'],
  template: `
    <h2>{{ title | async }}</h2>
    <!-- We are getting the data through the this.route and pluck the specific data to its own variable. There are also title property that we are getting
    as an observable which is displayed at the top and we are using async pipe to subscribe to this observables -->
    <mail-item
      *ngFor="let message of (messages | async)"
      [message]="message">
    </mail-item>
  `
})
export class MailFolderComponent {
  messages: Observable<Mail[]> = this.route.data.pluck('messages'); // We are using pluck to we retrieving the nested observable from the object.
  title: Observable<string> = this.route.params.pluck('name');
  constructor(private route: ActivatedRoute) {}
}
