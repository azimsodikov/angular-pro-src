import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[credit-card]'
})
export class CreditCardDirective {
  @HostListener('input', ['$event']) // host is the element that we binded our directive
  // it will accept different events as an call back function
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;

    let trimmed = input.value.replace(/\s+/g, '');
    if (trimmed.length > 16) {
      trimmed = trimmed.substr(0, 16);
    }

    let numbers = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.substr(i, 4));
    }

    input.value = numbers.join(' ');

  }
}
