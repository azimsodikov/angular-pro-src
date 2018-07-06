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
 *  In this lesson we created the service to fetch the data from the api, and set the initial state inside our store. Then in other components,
 *  ..we are fetching the data from the store.
 */
