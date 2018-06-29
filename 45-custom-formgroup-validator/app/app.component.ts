import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <div>
      <stock-inventory></stock-inventory>
    </div>
  `
})
/**
 *  In this lesson we learned how to add group wise validation, specifically when stock is alredy added to the card we will disable the button and
 *  ..give visual sign to the user that stock is already added to the card. We do this by gettiing the reference to the formArray and chech whether the stock
 *  ..that we want to add already exists. If it does we will let the user know.
 */
export class AppComponent {}
