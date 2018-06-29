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
 * In this tutorial we learned how to merge two observables to join the result, also we learned to pass down the data to child, stateless components
 * ..which in turn shows the results in the dom.
 *
 * We created two observable and joined then inseide the service and then in our container component we are subscribing to our servive methods and fetching the observable
 * ..into the map object.
 */
export class AppComponent {}
