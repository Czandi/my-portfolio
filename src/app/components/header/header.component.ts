import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('switcherBackground') switcherBackground: ElementRef;
  @ViewChild('pl') switcherPl: ElementRef;
  @ViewChild('eng') switcherEng: ElementRef;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {}

  switchLanguage(language: string) {
    this.translate.use(language);

    switch (language) {
      case 'pl':
        this.switcherPl.nativeElement.classList.add('active');
        this.switcherEng.nativeElement.classList.remove('active');
        this.switcherBackground.nativeElement.classList.add('left');
        break;
      case 'eng':
        this.switcherEng.nativeElement.classList.add('active');
        this.switcherPl.nativeElement.classList.remove('active');
        this.switcherBackground.nativeElement.classList.remove('left');
        break;
    }
  }
}
