import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [`
    pizza-viewer,
    side-viewer,
    drink-viewer {
      display: block;
      border-bottom: 2px solid #eee;
      padding: 20px 0;
    }
  `],
  template: `
    <div>
      <pizza-viewer></pizza-viewer>
      <side-viewer></side-viewer>
      <drink-viewer></drink-viewer>
    </div>
  `
})
/**
 *  In the providers property instead of using the useClass, we can use useFactory to customize the class that we want to use like we did inside a
 *  ..drink-viewer.component and other components;
 */
export class AppComponent {}
