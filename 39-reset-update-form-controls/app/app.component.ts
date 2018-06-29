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
 * We just resetting the selector group to the initial state every time we add the product,
 * also form controls will be resetted as pristine and untauched. There are also patchValue method which lets us just pass the individual control value
 * but it will not reset the form completly and it will still be dirty and touched. There is also setValue method on the form which lets you set the value
 * of the controller just like a patchValue but in this case whole form control values needs to be supplied.
 * reset, patchValue, setValue.
 */
export class AppComponent {}
