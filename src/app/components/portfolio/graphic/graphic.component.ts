import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.scss'],
})
export class GraphicComponent implements OnInit {
  @Input() title: string;
  @Input() fileName: string;
  @Input() description: string;

  constructor() {}

  ngOnInit(): void {}
}
