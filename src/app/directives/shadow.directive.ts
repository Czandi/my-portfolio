import { Directive, ElementRef } from '@angular/core';
import { Colors } from 'src/assets/variables';

@Directive({
  selector: '[shadow]',
})
export class ShadowDirective {
  constructor(el: ElementRef) {
    let element: HTMLElement = el.nativeElement;
    element.setAttribute(
      'style',
      'filter: drop-shadow(-7px 5px 0px ' + Colors.secondaryGreen + ');'
    );
  }
}
