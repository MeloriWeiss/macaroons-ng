import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() phoneNumber: string = '';

  @Input() macaroons!: HTMLElement;
  @Input() advantages!: HTMLElement;
  @Input() order!: HTMLElement;
  constructor() { }

  ngOnInit(): void {
  }

  openMenu(menu: HTMLElement) {
    menu.classList.add('open');
  }

  closeMenu(menu: HTMLElement) {
    menu.classList.remove('open');
  }

  scrollTo(element: HTMLElement) {
    element.scrollIntoView({behavior: "smooth"});
  }
}
