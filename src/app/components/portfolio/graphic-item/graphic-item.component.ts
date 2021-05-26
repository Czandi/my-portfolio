import { Component, Input, OnInit } from '@angular/core';
import { Graphic } from './graphic.class';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic-item.component.html',
  styleUrls: ['./graphic-item.component.scss'],
})
export class GraphicItemComponent implements OnInit {
  @Input() graphic: Graphic;

  constructor() {}

  ngOnInit(): void {}

  goToLink(link: string) {
    window.open(link, '_blank');
  }
}
