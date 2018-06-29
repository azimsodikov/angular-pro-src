import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <div>
      <stock-inventory></stock-inventory>
    </div>
  `
})
/**
 *  The way async validator works is during our validation we gonna perform async operation like call the api and etc. In this partucular example
 *  ..we are calling the api to check whether branch id exists in our database and give the user visual sign that they succeded or failed in the form.
 *
 *  Unlike our regular validators, we create our custom validator function inside our component, which uses the service to call and check whether this branch
 *  exists in our database.
 */
export class AppComponent {}
