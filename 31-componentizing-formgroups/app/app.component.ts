import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <div>
      <stock-inventory></stock-inventory>
    </div>
  `
})
// In this project, we created the seperate components to each of our formGroups using
// ..the same fromGroup by just passing it through data binding.
export class AppComponent {}
