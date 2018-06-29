import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const COUNTER_CONTROL_ACCESSOR = { // We are registering our custom form, and accessing its value accessor
  // What we are trying to do is just make this component act like a input type='number' and be able to write to the form
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => StockCounterComponent), // We are passing our class through forwardRef function which waits for the StockCounterComponent to be available (Hoisted).
  multi: true // We are extending our component to access controlValueAccessor
};

@Component({
  selector: 'stock-counter',
  providers: [COUNTER_CONTROL_ACCESSOR],
  styleUrls: ['stock-counter.component.scss'],
  template: `
    <div class="stock-counter">
      <div>
        <div>
          <p>{{ value }}</p>
          <div>
            <button
              type="button"
              (click)="increment()"
              [disabled]="value === max">
              +
            </button>
            <button
              type="button"
              (click)="decrement()"
              [disabled]="value === min">
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  `
})
/**
 *  We need to implement the control value accessor interface to make sure we create the required methods.
 *  Three functions needs to be implemented:
 *  writeValue(value){}
 *  registerOnChange(fn){}
 *  registerOnTouched(fn){}
 *  These are the methods needs to be implemented.
 *  Then we can add the formControlName which powers our functions inside our custom element which gives us access to this functions
 */
export class StockCounterComponent implements ControlValueAccessor {

  private onTouch: Function;
  private onModelChange: Function;

  registerOnTouched(fn) {
    // This function is called when we actually interacted with the form every time, so whenever we try to change the value this funtion will be called.
    // ..also it will add touched and dirty classed to the dom node.
    this.onTouch = fn;
  }

  registerOnChange(fn) {
    // This function is called when we change the value of the control and keeps it in sync with the model.
    this.onModelChange = fn;
  }

  writeValue(value) {
    // This will give access to the initial value property of the input, but does not updates when it is changed.
    this.value = value || 0;
  }

  @Input() step: number = 10;
  @Input() min: number = 10;
  @Input() max: number = 1000;

  value: number = 10;

  increment() {
    if (this.value < this.max) {
      this.value = this.value + this.step;
      this.onModelChange(this.value);
    }
    this.onTouch();
  }
  decrement() {
    if (this.value > this.min) {
      this.value = this.value - this.step;
      this.onModelChange(this.value);
    }
    this.onTouch();
  }
}
