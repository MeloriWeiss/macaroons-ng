import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header-adaptive.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() orderBlock: HTMLElement | null = null;

  public phone: string = '+375 (29) 368-98-68';

  public openMenu(menu: HTMLElement) {
    menu.classList.add('open');
  }

  public closeMenu(menu: HTMLElement) {
    menu.classList.remove('open');
  }

  public scrollToOrder() {
    this.orderBlock?.scrollIntoView({behavior: "smooth"});
  }
}
