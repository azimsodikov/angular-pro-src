import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <songs-playlist></songs-playlist>
      <songs-listened></songs-listened>
      <songs-favourites></songs-favourites>
    </div>
  `
})
export class AppComponent {}
/**
 *  index as i; is a nice feature to get the index of the *ngFor directive, instead of declaring the variable;
 *
 *  In this lesson we are creating click events and propogate that event up to the container component and from that container component
 *  ..we are propagating that event to the service; We are not mutating any data inside our components, all the mutation is handled by the service;
 */
