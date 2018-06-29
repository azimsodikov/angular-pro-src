import { AbstractControl } from '@angular/forms';

export class StockValidators { // We need to have an static method which runs without instantiation of the class.
  // When this validator is get called, formControl instance will be passed, where we can access the value property of the control.
  static checkBranch(control: AbstractControl) {
    const regexp = /^[a-z]\d{3}$/i;
    const valid = regexp.test(control.value);
    // In this method we need to return the object which is either null, or invalidBranch: true, which makes this control invalid.
    return valid ? null : { invalidBranch: true };
  }
}
