import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/distinctUntilChanged';

import { State } from './state';

const state: State = {
  playlist: undefined
};

export class Store {

  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().distinctUntilChanged();
  // We are changing this to the observable and distinctUntilChanged makes sure that subscribers to our store will not be triggered unless
  // ..the value is different than the previous value.

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pluck(name); // We are using pluck to get the single property from the object;
  }

  // This is how the state is being set, we pass the name of the state we want to set, and if name does not exist, we are gonna create the new start;
  set(name: string, state: any) {
    this.subject.next({
      ...this.value, [name]: state
    });
  }

}
