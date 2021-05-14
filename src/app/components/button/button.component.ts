import { Component, Input, OnInit } from '@angular/core';
import {
  expansionTriggerAnimation,
  bottomButtonSwitch,
  topButtonSwitch,
} from './animations';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  animations: [expansionTriggerAnimation, bottomButtonSwitch, topButtonSwitch],
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  public onButton: boolean;
  public isExpanded: boolean;
  public status: string = 'off';

  constructor() {
    this.onButton = false;
  }

  ngOnInit(): void {}

  onHover() {
    this.onButton = true;
    console.log(this.onButton);
  }

  onLeave() {
    this.onButton = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
    this.status = !this.isExpanded ? 'off' : 'on';

    console.log('Status:', this.status);
  }
}
