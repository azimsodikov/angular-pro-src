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
 * The difference between template driven and reactive forms is, reactive forms soure of truth is compomponent whereas template's is template.
 * The details is inside a component itself.
 */
export class AppComponent {}
