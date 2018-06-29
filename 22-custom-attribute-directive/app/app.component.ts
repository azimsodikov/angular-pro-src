import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <label>
        Credit Card Number
        <input
          name="credit-card"
          type="text"
          placeholder="Enter your 16-digit card number"
          credit-card>
      </label>
    </div>
  `
})
/**
 * Component is a type of directive but component can have an template whereas directive can not, that means we can use
 * ..all the component methods like a lifecycle hooks and etc.
 */
export class AppComponent {
}
