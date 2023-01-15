import { UiModule } from './../../ui.module';
import { Product } from './../interfaces/product.interface';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public getProducts(): Observable<Product[]> {
    return of([
      {
        id: 0,
        name: 'Sausage'
      },
      {
        id: 1,
        name: 'Cheese'
      },
      {
        id: 2,
        name: 'Bread'
      },
      {
        id: 3,
        name: 'Tomato'
      },
      {
        id: 4,
        name: 'Onion'
      },
      {
        id: 5,
        name: 'Toping'
      },
    ])
  }
}
