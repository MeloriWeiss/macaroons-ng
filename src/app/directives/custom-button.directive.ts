import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[customButton]'
})
export class CustomButtonDirective implements OnInit {
  @Input() customButtonBg: string = 'linear-gradient(0deg, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)';
  @Input() customButtonBgHover: string = 'linear-gradient(0deg, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)';
  constructor(private el: ElementRef,
              private rend: Renderer2) {
  }
  @HostListener('mouseenter')
  changeBgHover() {
    this.changeBackground(this.customButtonBgHover);
  }
  @HostListener('mouseleave')
  changeBgDefault() {
    this.changeBackground(this.customButtonBg);
  }
  ngOnInit() {
    this.changeBackground(this.customButtonBg);
  }
  changeBackground(color: string) {
    this.rend.setStyle(this.el.nativeElement, 'background', color);
  }
}
