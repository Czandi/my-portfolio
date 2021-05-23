import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  HostListener,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { popUpAnimation } from './header.animations';
import { NavbarService } from '../../services/navbar.service';
import {
  slideFromBottomAnimation,
  slideFromTopAnimation,
} from './header.animations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [slideFromBottomAnimation, slideFromTopAnimation, popUpAnimation],
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('switcherBackground') switcherBackground: ElementRef;
  @ViewChild('pl') switcherPl: ElementRef;
  @ViewChild('eng') switcherEng: ElementRef;
  @ViewChild('headerLineText') headerLineText: ElementRef;

  private currentLanguage: string;
  private headerLine: string;
  private letterIndex: number = 0;
  private navbarServiceSub: Subscription;

  public slideIn: string = 'visible';
  public popUp: string = 'visible';
  public showNavbar: boolean = false;

  constructor(
    private translate: TranslateService,
    private navbarService: NavbarService
  ) {
    this.currentLanguage = translate.currentLang;
    translate.get('HEADER.LOGO-1').subscribe((res: string) => {
      this.headerLine = res;
    });

    this.navbarServiceSub = this.navbarService
      .onShowNavbar()
      .subscribe((showNavbar) => {
        this.showNavbar = showNavbar;
      });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.slideIn = 'visible';
    }, 2400);

    setTimeout(() => {
      this.popUp = 'visible';
    }, 2500);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.typing();
    }, 200);
    setTimeout(() => {
      this.headerLineText.nativeElement.setAttribute('style', 'z-index: 4');
    }, 2500);
  }

  ngOnDestroy(): void {
    this.navbarServiceSub.unsubscribe();
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

  toggleNavbar() {
    this.showNavbar = !this.showNavbar;
    this.navbarService.setShowNavbar(this.showNavbar);
  }
}
