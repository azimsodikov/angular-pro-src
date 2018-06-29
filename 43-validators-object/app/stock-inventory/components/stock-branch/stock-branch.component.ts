import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'stock-branch',
  styleUrls: ['stock-branch.component.scss'],
  template: `
    <div [formGroup]="parent">
      <div formGroupName="store">
        <input
          type="text"
          placeholder="Branch ID"
          formControlName="branch">
        <div
          class="error"
          *ngIf="required('branch')">
          Branch ID is required
        </div>
        <input
          type="text"
          placeholder="Manager Code"
          formControlName="code">
        <!-- Below div are shown if there is an error or form is not valid. We are creating a function which tells us whether form is touched or it has
        ..an error. -->
        <div
          class="error"
          *ngIf="required('code')">
          Manager ID is required
        </div>
      </div>
    </div>
  `
})
export class StockBranchComponent {
  @Input()
  parent: FormGroup;


  // We are calling this function inside our template. Function just returns true or false according to forms status.
  required(name: string) {
    return (
      this.parent.get(`store.${name}`).hasError('required') &&
      this.parent.get(`store.${name}`).touched
    );
  }
}
