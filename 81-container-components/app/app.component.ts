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
 *  In this lesson we set it up the container components with store injected in side the components.
 */
