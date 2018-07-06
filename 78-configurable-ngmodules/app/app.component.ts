import { Component } from '@angular/core';
import { FoodStoreService } from './food-store/food-store.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      Food Store ({{ (store | async)?.name }})
    </div>
  `
})
/**
 *  Configurable modules are used to dynamically pass the tokens to the module's forRoot method and provide that tokens to the services that is
 *  ..being used inside that modules.
 */
export class AppComponent {
  store = this.foodService.getStore();
  constructor(private foodService: FoodStoreService) {}
}
