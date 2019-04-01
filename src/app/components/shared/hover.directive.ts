import {
  Directive,
  HostBinding,
  HostListener,
  ElementRef,
  Renderer2} from '@angular/core';

@Directive({
  selector: '[appEfectHover]'
})
export class HoverDirective {
  constructor(
    private el: ElementRef,
    private render: Renderer2
  ) {}
  @HostBinding('class.rotar')
  @HostListener('mouseover') onMouseOver() {
    const part = this.el.nativeElement.querySelector('btn');
    console.log(part);
    // this.renderer.setElementStyle(part, 'display', 'block');
    // this.ishovering = true;
  }

  @HostListener('mouseout') onMouseOut() {
    // let part = this.el.nativeElement.querySelector('.card-text');
    // this.renderer.setElementStyle(part, 'display', 'none');
    // this.ishovering = false;
  }
}
