import {Component} from '@angular/core';
import {MacaroonType} from "./types/macaroon.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './app-adaptive.component.scss']
})
export class AppComponent {
  public showPresent: boolean = true;
  public values = {
    productInCart: '',
  }

  public advantages = [
    {
      title: 'Лучшие продукты',
      description: `Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем
          консерванты, ароматизаторы и красители.`,
    },
    {
      title: 'Много вкусов',
      description: `Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70
          вкусов пироженок.`,
    },
    {
      title: 'Бисквитное тесто',
      description: `Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет
          маргарина и дрожжей!`,
    },
    {
      title: 'Честный продукт',
      description: `Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы
          получили 22.06.2016 г.`,
    },
  ];

  public productItems = [
    {
      image: 'macaroon1.png',
      title: 'Макарун с малиной',
      count: 1,
      price: '1.70',
    },
    {
      image: 'macaroon2.png',
      title: 'Макарун с манго',
      count: 1,
      price: '1.70',
    },
    {
      image: 'macaroon3.png',
      title: 'Пирог с малиной',
      count: 1,
      price: '1.70',
    },
    {
      image: 'macaroon4.png',
      title: 'Пирог с фисташками',
      count: 1,
      price: '1.70',
    }
  ];

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
  }

  public addToOrder(target: HTMLElement, product: MacaroonType): void {
    this.scrollTo(target);
    this.values.productInCart = product.title.toUpperCase();
  }
}
