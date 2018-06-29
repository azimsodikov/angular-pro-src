import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[credit-card]'
})
export class CreditCardDirective {
  // Below is the way to talk to the DOM node where our directive is being used.
  constructor(private element: ElementRef) {
    console.log(this.element);
  }
}
