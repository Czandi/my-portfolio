import { Component, Input, OnInit } from '@angular/core';
import { Graphic } from './graphic.class';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.scss'],
})
export class GraphicComponent implements OnInit {
  @Input() graphic: Graphic;

  constructor() {}

  ngOnInit(): void {}
}
