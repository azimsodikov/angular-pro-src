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
// @HostBinding will give access to dom nodes properties and lets us set or change the properties
export class AppComponent {
}
