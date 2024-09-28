import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  orderCountProducts: number = 0;
  orderAmount: number = 0;
  constructor() { }
}
