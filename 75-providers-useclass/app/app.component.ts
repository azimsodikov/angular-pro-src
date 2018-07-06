import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [`
    pizza-viewer,
    side-viewer,
    drink-viewer {
      display: block;
      border-bottom: 2px solid #eee;
      padding: 20px 0;
    }
  `],
  template: `
    <div>
      <pizza-viewer></pizza-viewer>
      <side-viewer></side-viewer>
      <drink-viewer></drink-viewer>
    </div>
  `
})
/**
 *  When we use providers property inside a component to get our service, we are asking the new instance of the service each time component gets initialized.
 *  We can also use { provide: FoodService, useClass: SuperFoodService } to use the different class.
 */
export class AppComponent {}
