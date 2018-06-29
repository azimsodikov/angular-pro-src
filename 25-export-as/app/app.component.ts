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
      <label
        tooltip="3 digits, back of your card"
        #myTooltip="tooltip">
        Enter your security code
        <!-- Since we used exportAs property on the directive we can assign tooltip to the template variable and have an access to
        ..the all the properties of the directive through the template varaible and call the methods that we want to fire at particular event -->
        <span
          (mouseover)="myTooltip.show()"
          (mouseout)="myTooltip.hide()">
          (?)
        </span>
        <input type="text">
      </label>
    </div>
  `
})
/**
 * So we can take adventage of the directives and extend its methods onto the component using template variables
 * ..so we can use it inside a template that we attach our directive.
 */
export class AppComponent {
}
