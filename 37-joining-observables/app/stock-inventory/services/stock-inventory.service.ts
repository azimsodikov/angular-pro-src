import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'; // We are adding catch from operator because we want to use it as a catch.
import 'rxjs/add/observable/throw'; // We are adding observable/throw because we want to use it as an method.

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
}
