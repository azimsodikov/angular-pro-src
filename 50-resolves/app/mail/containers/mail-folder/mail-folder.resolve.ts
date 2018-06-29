import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { MailService } from '../../mail.service';
import { Mail } from '../../models/mail.interface';

@Injectable()// This acts like an middlewere between route and component.
export class MailFolderResolve implements Resolve<Mail[]> {
  constructor(private mailService: MailService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // We are implementing resolve method which will give us the activatedRoute and RouterStateSnapshot where we can access the route.params and othe properties of the route url.


    return this.mailService.getFolder(route.params.name);
  }
}
