import { Http, Response, ResponseOptions } from '@angular/http';
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { StockInventoryService } from './stock-inventory.service';

// When we are testing multiple classes and we need a TestBed, we can actually just create a one TestBed and use that throuout our testing files.
TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

function createResponse(body) {
  return Observable.of( // We are creating the response Object with the json that we are passing in;
    new Response(new ResponseOptions({ body: JSON.stringify(body) }))
  );
}

// When we are testing the service which has http service dependency, we do not actually use real http service. We are gonna create our custom mock
// ..http service which is gonna return Observable;
class MockHttp {
  get() {
    return createResponse([]);
  }
}

const cartItems = [{ product_id: 1, quantity: 10 }, { product_id: 2, quantity: 5 }];
const productItems = [{ id: 1, price: 10, name: 'Test' }, { id: 2, price: 100, name: 'Another Test' }];

describe('StockInventoryService', () => {

  let service: StockInventoryService;
  let http: Http;

  beforeEach(() => {
    const bed = TestBed.configureTestingModule({
      providers: [
        StockInventoryService,
        { provide: Http, useClass: MockHttp } // We are telling angular we wanna override the Http service with our custom mock service;
      ]
    });
    http = bed.get(Http);
    service = bed.get(StockInventoryService);
  });

  it('should get cart items', () => {
    spyOn(http, 'get').and.returnValue(createResponse([...cartItems])); // We are hijacking the http token and using our mockHttp to be able to
    //.. return our custom data and test against it.


    service.getCartItems()
      .subscribe((result) => {
        expect(result.length).toBe(2);
        expect(result).toEqual(cartItems);
      });
  });

  it('should get product items', () => {
    spyOn(http, 'get').and.returnValue(createResponse([...productItems]));

    service.getProducts()
      .subscribe((result) => {
        expect(result.length).toBe(2);
        expect(result).toEqual(productItems);
      });
  });

});
