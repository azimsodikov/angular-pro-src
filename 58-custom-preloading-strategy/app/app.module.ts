import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route, Routes, PreloadingStrategy } from '@angular/router';
import { HttpModule } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { MailModule } from './mail/mail.module';

import { AppComponent } from './app.component';

export class CustomPreload implements PreloadingStrategy {
  // This is how you preload some of the modules. Preload method will iterate over our route definitions and if it sees data.preload true, it will preload that module.
  // You just check whether route object has an data property and also data has an a preload property
  // ..then return the function or just return the Observable of null. Also in the module we need to add this custom preloadStrategy onto providers
  // ..property in our ngModule.
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return route.data && route.data.preload ? fn() : Observable.of(null);
  }
}

export const ROUTES: Routes = [
  { path: 'dashboard', data: { preload: true }, loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: '**', redirectTo: 'mail/folder/inbox' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  providers: [CustomPreload], // We are importing our customPreload to providers array just like an service
  imports: [
    BrowserModule,
    HttpModule,
    MailModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: CustomPreload })
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
