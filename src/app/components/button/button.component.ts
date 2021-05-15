import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
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
export class ButtonComponent implements OnInit, OnChanges {
  @Input() text: string;
  @Input() type: string = 'green';
  public onButton: boolean;
  public status: string = 'off';

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {}

  toggle() {
    if (this.type === 'header') {
      this.onButton = !this.onButton;
      this.status = !this.onButton ? 'off' : 'on';
    }
  }
}
