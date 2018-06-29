import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <ul>
        <li *myFor="let item of items; let i = index;">
          {{ i }} Member: {{ item.name | json }}
        </li>
        <!-- Above code is a actual what is going on inside a *ngFor -->
        <template myFor [myForOf]="items" let-item let-i="index">
          <li>
            {{ i }} Member: {{ item.name | json }}
          </li>
        </template>
      </ul>
    </div>
  `
})
// Take a look at the directive implementation which was implemented perferctly.
export class AppComponent {
  items = [{
    name: 'Mark Hoppus',
    age: 44,
    location: 'California'
  },{
    name: 'Tom Delonge',
    age: 41,
    location: 'California'
  },{
    name: 'Travis Barker',
    age: 41,
    location: 'California'
  }];
// Inside a constructor we are pushing the new object to the collection, and when it adds and returns a new array change detection will be
//.. run and it will reiterate the collection again.
  constructor() {
    setTimeout(() => { // Below we are passing the new reference to the array, thats why it will trigger the change detection and updates the view once setTimeout runs.
      this.items = [...this.items, { name: 'Matt Skiba', age: 40, location: 'California' }];
      // this.items.push({ name: 'Matt Skiba', age: 40, location: 'California' });
    }, 2000);
  }
}
