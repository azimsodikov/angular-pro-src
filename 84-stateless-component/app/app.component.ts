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
 *  In this lesson we created the songs list component (stateless) component, which just lists the songs with styles applied to show the use
 *  ..which songs are listened or favorited. The songs data are being passed from the parent component through one way data flow;
 */
