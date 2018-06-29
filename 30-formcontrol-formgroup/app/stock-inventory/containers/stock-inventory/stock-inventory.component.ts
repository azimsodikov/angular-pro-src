import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'stock-inventory',
  styles: ['stock-inventory.component.scss'],
  template: `
    <div class="stock-inventory">
      <form [formGroup]="form" (ngSubmit)="onSubmit()">

        <div formGroupName="store">
          <!-- when we have a nested form groups, we need to differentiate it using formGroupName which is the
          key name of the formgroup object, basically whatever we form-group created inside a component should match the template. -->
          <input
            type="text"
            placeholder="Branch ID"
            formControlName="branch">
          <input
            type="text"
            placeholder="Manager Code"
            formControlName="code">
        </div>

        <div class="stock-inventory__buttons">
          <button
            type="submit"
            [disabled]="form.invalid">
            Order stock
          </button>
        </div>

        <pre>{{ form.value | json }}</pre>

      </form>
    </div>
  `
})
export class StockInventoryComponent {
  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl('B182'),
      code: new FormControl('1234')
    })
  })

  onSubmit() {
    console.log('Submit:', this.form.value);
  }
}
