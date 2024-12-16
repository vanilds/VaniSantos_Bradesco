import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRunaway]'
})
export class RunawayDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    const button = this.el.nativeElement;
    const maxWidth = window.innerWidth - button.offsetWidth;
    const maxHeight = window.innerHeight - button.offsetHeight;

    button.style.position = 'absolute';
    button.style.top = `${Math.random() * maxHeight}px`;
    button.style.left = `${Math.random() * maxWidth}px`;
  }
}