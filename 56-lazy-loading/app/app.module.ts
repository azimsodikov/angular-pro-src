import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { MailModule } from './mail/mail.module';

import { AppComponent } from './app.component';

export const ROUTES: Routes = [
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  // What we are doing here is loading dashboard module on demand. When path hits dashboard, it will load the dashboard.module file and to be specific,
  // ..we need to tell the name of the Module we want load on demand with using # at the beginning. So this load the dashboard module dynamically, instead of
  // ..we provide it inside our imports property on this module.s
  { path: '**', redirectTo: 'mail/folder/inbox' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MailModule,
    RouterModule.forRoot(ROUTES)
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
