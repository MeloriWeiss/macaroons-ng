import {Component, OnInit} from '@angular/core';
import {ProductType} from "./types/product.type";
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";
import {AdvantageService} from "./services/advantage.service";
import {AdvantageType} from "./types/advantage.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showPresent: boolean = true;
  values = {
    productInCart: '',
  }
  phoneNumber: string = '375293689868';

  ourAdvantages: AdvantageType[] = [];
  productItems: ProductType[] = [];
  orderProductsCount: number = 0;
  orderAmount: number = 0;
  constructor(private productService: ProductService,
              private cartService: CartService,
              private advantageService: AdvantageService) {
    this.orderProductsCount = this.cartService.orderCountProducts;
    this.orderAmount = this.cartService.orderAmount;
  }

  ngOnInit() {
    this.productItems = this.productService.getProducts();
    this.ourAdvantages = this.advantageService.getAdvantages();
  }

  scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
  }

  addToOrder(target: HTMLElement, product: ProductType): void {
    alert(`${product.title} добавлен в корзину!`);
    this.cartService.orderCountProducts++;
    this.cartService.orderAmount += product.price;
    this.orderProductsCount = this.cartService.orderCountProducts;
    this.orderAmount = this.cartService.orderAmount;
    this.scrollTo(target);
    this.values.productInCart = product.title.toUpperCase();
  }
}
