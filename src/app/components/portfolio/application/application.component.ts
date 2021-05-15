import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],
})
export class ApplicationComponent implements OnInit {
  @Input() title: string;
  @Input() stack: string[];
  @Input() videoFileName: string;
  @Input() description: string;

  constructor() {}

  ngOnInit(): void {}
}
