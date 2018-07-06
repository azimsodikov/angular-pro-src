import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { PizzaViewerComponent } from './containers/pizza-viewer.component';
import { DrinkViewerComponent } from './containers/drink-viewer.component';
import { SideViewerComponent } from './containers/side-viewer.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaViewerComponent,
    DrinkViewerComponent,
    SideViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    { provide: 'api', useValue: '/api/pizzas' } // We are using the string token of 'api' to get the value if of this url when we request this inside any,
    // component or service. We can use this globally;
  ]
})
/**
 *  When we provide this globally we can ask in our contsructor methods, using the @Inject method give us the value of this provider;
 */
export class AppModule {}
