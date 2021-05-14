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

  private currentLanguage: string;

  constructor(private translate: TranslateService) {
    this.currentLanguage = translate.currentLang;
  }

  ngOnInit(): void {}

  switchLanguage(language: string) {
    this.translate.use(language);
    this.switcherBackground.nativeElement.classList.remove('hover');

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
    this.currentLanguage = language;
  }

  increaseBackground(language: string) {
    if (language !== this.currentLanguage) {
      this.switcherBackground.nativeElement.classList.add('hover');
    }
  }

  decreaseBackground(language: string) {
    if (language !== this.currentLanguage) {
      this.switcherBackground.nativeElement.classList.remove('hover');
    }
  }
}
