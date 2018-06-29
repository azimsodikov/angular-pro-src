import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <example-one></example-one>
      <example-two></example-two>
      <example-three></example-three>
    </div>
  `
})
/*
  There are three strategies to encapsulate the view, 'Emulated', 'None', 'Native'
  Emulated - is by default and it assigns ng-content and some hash value to each component in the dom and pass that value to the
  styles which then can be applied to only this component.

  None - this does not assign any hash value to the component and essentially is not encapsulated and styles will be applied globally

  Native - this will use the platforms native shadow dom strategy which is native to the web components and chrone supports it

*/
export class AppComponent {
}
