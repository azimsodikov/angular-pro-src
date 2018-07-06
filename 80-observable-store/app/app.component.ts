import { Component } from '@angular/core';

import { Store } from './store';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <div *ngFor="let todo of todos$ | async">
        {{ todo.name }}
      </div>
    </div>
  `
})
export class AppComponent {

  // Here we are actually asking for that data;
  todos$ = this.store.select<any[]>('todos');

  constructor(
    private store: Store
  ) {
    // Here we are just populating the data;
    this.store.set('todos', [{ id: 1, name: 'Eat dinner' }, { id: 2, name: 'Do washing' }]);
    console.log(this.store);
  }

}
/**
 *  State Managment is patterns for managing the state of the application. There are two solutions, one is a Redux, and the other one is a ngrx/store.
 *  .. NGRX/Store have used the redux pattern of managing the state using the observables.
 *  Benefits of using the store:
 *  * State is only changed in a controlled way;
 *  * Copmponent state is driven from the Store;
 *  * Immutable Objects are predictable;
 *  * Immutability is fast with Angular, no Change Detection;
 *  * Time-travel debugging and Developer Tools;
 *  * Avoids data synchronisation problems; (It uses the unidirectional data flow, so views are always in sync);
 *  * Server-side rendering, client-side rehydration; When we have single store all the components will get the same information, because the source is the same;
 */
