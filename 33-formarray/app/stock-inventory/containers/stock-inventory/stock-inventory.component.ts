import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

import { Product } from '../../models/product.interface';

@Component({
  selector: 'stock-inventory',
  styles: ['stock-inventory.component.scss'],
  template: `
    <div class="stock-inventory">
      <form [formGroup]="form" (ngSubmit)="onSubmit()">

        <stock-branch
          [parent]="form">
        </stock-branch>

        <stock-selector
          [parent]="form"
          [products]="products">
        </stock-selector>

        <stock-products
          [parent]="form">
        </stock-products>

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

  products: Product[] = [
    { "id": 1, "price": 2800, "name": "MacBook Pro" },
    { "id": 2, "price": 50, "name": "USB-C Adaptor" },
    { "id": 3, "price": 400, "name": "iPod" },
    { "id": 4, "price": 900, "name": "iPhone" },
    { "id": 5, "price": 600, "name": "Apple Watch" },
  ];

  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl(''),
      code: new FormControl('')
    }),
    selector: this.createStock({}),
    stock: new FormArray([
      this.createStock({ product_id: 1, quantity: 10 }),
      this.createStock({ product_id: 3, quantity: 50 }),
    ])
  })
  // When you see common patterns like here formGroup is being created too often, we can create a wrapper function that will create
  // ..formGroups for us.
  createStock(stock) {
    return new FormGroup({
      // Pay attention to how you can have a methods have default values when param is not provided
      product_id: new FormControl(+stock.product_id || ''),
      quantity: new FormControl(stock.quantity || 10)
    });
  }

  onSubmit() {
    console.log('Submit:', this.form.value);
  }
}
