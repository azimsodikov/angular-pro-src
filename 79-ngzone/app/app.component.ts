import { Component, OnInit, DoCheck, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      Counter: {{ counter }}
    </div>
  `
})
export class AppComponent implements OnInit, DoCheck {
  counter = 0;
  constructor(
    private zone: NgZone
  ) {}
  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      for (let i = 0; i < 100; i++) { // We can perfom certain tasks outside of the angular and return to the zone with the result;
        setTimeout(() => this.counter++);
      }
      this.zone.run(() => { // We are returning to the zone and assigning the result to the property on the class.
        setTimeout(() => this.counter = this.counter, 1000);
      });
    });
  }
  ngDoCheck() { // It runs every time somtething changes!
    console.log('Change detection has been run!');
  }
}
/**
 *  Zone is a angular's execution context that keep an eye on the code that we write. It also keeps an eye on the async codes. Angular runs the code inside
 *  ..a zone to keep track of the things that is being changed. We can perform certain async tasks that does not require view update otside of the zone;
 */
