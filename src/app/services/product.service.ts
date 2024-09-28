import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): ProductType[] {
    // ajax
    return [
      {
        image: 'macaroon1.png',
        title: 'Макарун с малиной',
        count: 1,
        price: 1.7,
      },
      {
        image: 'macaroon2.png',
        title: 'Макарун с манго',
        count: 1,
        price: 1.7,
      },
      {
        image: 'macaroon3.png',
        title: 'Пирог с малиной',
        count: 1,
        price: 1.7,
      },
      {
        image: 'macaroon4.png',
        title: 'Пирог с фисташками',
        count: 1,
        price: 1.7,
      }
    ];
  }
}
