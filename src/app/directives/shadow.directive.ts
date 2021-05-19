import { Directive, ElementRef, HostListener } from '@angular/core';
import { Colors } from 'src/assets/variables';

@Directive({
  selector: '[shadow]',
})
export class ShadowDirective {
  private currentSize: string;
  private element: ElementRef;

  constructor(el: ElementRef) {
    let viewWidth: number = window.innerWidth;
    this.element = el;

    this.setShadowSize(viewWidth);

    if (viewWidth >= 2500) {
      this.currentSize = 'big';
    } else {
      this.currentSize = 'standard';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    let viewWidth = event.target.innerWidth;
    this.setShadowSize(viewWidth);
  }

  setShadowSize(width: number): void {
    if (width < 2500 && this.currentSize !== 'standard') {
      this.currentSize = 'standard';
      let el = this.element.nativeElement;
      el.setAttribute(
        'style',
        'filter: drop-shadow(-7px 5px 0px ' + Colors.secondaryGreen + ');'
      );
    } else if (width > 2500 && this.currentSize !== 'big') {
      this.currentSize = 'big';
      let el = this.element.nativeElement;
      el.setAttribute(
        'style',
        'filter: drop-shadow(-12px 8px 0px ' + Colors.secondaryGreen + ');'
      );
    }
  }
}
