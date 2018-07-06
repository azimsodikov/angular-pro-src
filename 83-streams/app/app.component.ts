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
/**
 *  In this lesson we learned how to compose streams from our Store. In our favorites and listened components we are filtering the observable and
 *  ..creating new observable to filter down favorites and listened songs to correct comonents.
 */
export class AppComponent {}
