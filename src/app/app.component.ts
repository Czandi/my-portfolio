import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { slideOutAnimation } from './main.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideOutAnimation],
})
export class AppComponent {
  title = 'my-portfolio';

  constructor(translate: TranslateService) {
    translate.setDefaultLang('pl');
    translate.use('pl');
  }
}
