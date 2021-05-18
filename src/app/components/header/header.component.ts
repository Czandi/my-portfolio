import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { iconAnimation } from './header.animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [iconAnimation],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('switcherBackground') switcherBackground: ElementRef;
  @ViewChild('pl') switcherPl: ElementRef;
  @ViewChild('eng') switcherEng: ElementRef;
  @ViewChild('headerLineText') headerLineText: ElementRef;

  private currentLanguage: string;
  private headerLine: string;
  private letterIndex: number = 0;

  constructor(private translate: TranslateService) {
    this.currentLanguage = translate.currentLang;
    translate.get('HEADER.LOGO-1').subscribe((res: string) => {
      this.headerLine = res;
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.typing();
    }, 200);
  }

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

  typing(): void {
    console.log(this.headerLine);
    this.headerLineText.nativeElement.textContent = this.headerLine.slice(
      0,
      ++this.letterIndex
    );

    if (this.letterIndex < this.headerLine.length) {
      setTimeout(() => {
        this.typing();
      }, 40);
    }
  }
}
