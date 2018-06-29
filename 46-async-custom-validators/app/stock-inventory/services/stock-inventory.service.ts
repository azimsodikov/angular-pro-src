import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Product, Item } from '../models/product.interface';

@Injectable()
export class StockInventoryService {
  constructor(
    private http: Http
  ) {}

  getCartItems(): Observable<Item[]> {
    return this.http
      .get('/api/cart')
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  getProducts(): Observable<Product[]> {
    return this.http
      .get('/api/products')
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  checkBranchId(id: string): Observable<boolean> {
    let search = new URLSearchParams();
    search.set('id', id);
    // We fist set the queryParams object with the search object and then pass that object when we call the api and check whether that
    // ..id exists in the database.
    return this.http
      .get('/api/branches', { search })
      .map((response: Response) => response.json())
      .map((response: any[]) => !!response.length) // We are using two exclamation !! marks to convert this to the boolean.
      .catch((error: any) => Observable.throw(error.json()));
  }
}
