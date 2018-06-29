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
 *  In this tutorail we created a custom control counter which is the component that acts like a input type="number" and will increment and decriment
 *  according to user interaction. to do that we created 'step', 'max', 'min' properties and we are passing that through data binding and there are also
 *  two different methods that lets increment() and decriment() according to user interaction.
 */
export class AppComponent {}
