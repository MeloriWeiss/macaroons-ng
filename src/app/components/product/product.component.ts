import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductType} from "../../types/product.type";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductType;
  @Input() index: number = 1;
  @Output() addedProduct: EventEmitter<ProductType> = new EventEmitter<ProductType>();
  constructor() {
    this.product = {
      image: '',
      title: '',
      count: 0,
      price: 0,
    }
  }

  ngOnInit(): void {
  }

  addToCart() {
    this.addedProduct.emit(this.product);
  }
}
