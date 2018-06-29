import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Mail } from './models/mail.interface';

@Injectable()
export class MailService {
  constructor(private http: Http) {}
  getFolder(folder: string): Observable<Mail[]> {
    return this.http
      .get(`/api/messages?folder=${folder}`) // We are querying the server with the folder name that we are passing through the service.
      .map(response => response.json());
  }
}
