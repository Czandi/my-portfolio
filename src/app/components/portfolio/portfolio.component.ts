import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Application } from './application-item/application.class';
import { Graphic } from './graphic-item/graphic.class';
import { TranslateService } from '@ngx-translate/core';
import { childTrigger } from './portfolio.animations';
import {
  appsSwitchAnimation,
  graphicSwitchAnimation,
} from './portfolio.animations';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [appsSwitchAnimation, graphicSwitchAnimation, childTrigger],
})
export class PortfolioComponent implements OnInit {
  @ViewChild('scrollTo') scrollTo: ElementRef;

  public selectedPortfolio: string = 'applications';
  public showApps: boolean = true;
  public showGraphics: boolean = false;
  public animation: boolean = true;
  public trigger: string = 'apps';

  public applications: Application[];
  public graphics: Graphic[];

  constructor(private translate: TranslateService, router: Router) {
    translate
      .get([
        'PROJECTS.TITLES.LABIRYNTH',
        'PROJECTS.TITLES.ANGELIKA_PORTFOLIO',
        'PROJECTS.TITLES.LESSON_JOURNAL',
        'PROJECTS.TITLES.INV_SYSTEM',
        'PROJECTS.TITLES.MARIOWOZ',
        'PROJECTS.TITLES.SHOPUP',
        'PROJECTS.TITLES.MY_PORTFOLIO',
        'PROJECTS.DESCRIPTIONS.LABIRYNTH',
        'PROJECTS.DESCRIPTIONS.ANGELIKA_PORTFOLIO',
        'PROJECTS.DESCRIPTIONS.LESSON_JOURNAL',
        'PROJECTS.DESCRIPTIONS.INV_SYSTEM',
        'PROJECTS.DESCRIPTIONS.MARIOWOZ',
        'PROJECTS.DESCRIPTIONS.SHOPUP',
        'PROJECTS.DESCRIPTIONS.MY_PORTFOLIO',
      ])
      .subscribe((res) => {
        let data = res;
        this.applications = [
          new Application(
            data['PROJECTS.TITLES.ANGELIKA_PORTFOLIO'],
            ['angular', 'sass'],
            'angelika-portfolio.png',
            data['PROJECTS.DESCRIPTIONS.ANGELIKA_PORTFOLIO'],
            'https://github.com/Czandi/angelika-portfolio',
            'tutajbedzielink'
          ),
          new Application(
            data['PROJECTS.TITLES.INV_SYSTEM'],
            ['spring', 'angular', 'mysql', 'electron', 'sass'],
            'inv-system.png',
            data['PROJECTS.DESCRIPTIONS.INV_SYSTEM'],
            'https://github.com/Czandi/inventory-system-app'
          ),
          new Application(
            data['PROJECTS.TITLES.LESSON_JOURNAL'],
            ['spring', 'angular', 'sass', 'mysql'],
            'lesson-journal.png',
            data['PROJECTS.DESCRIPTIONS.LESSON_JOURNAL'],
            'https://github.com/Czandi/iami-project'
          ),
          new Application(
            data['PROJECTS.TITLES.MARIOWOZ'],
            ['angular', 'sass'],
            'mariowoz.png',
            data['PROJECTS.DESCRIPTIONS.MARIOWOZ'],
            'https://github.com/Czandi/mariowoz',
            'https://mariowoz.herokuapp.com/'
          ),
          new Application(
            data['PROJECTS.TITLES.LABIRYNTH'],
            ['js', 'css', 'html'],
            'labirynth.png',
            data['PROJECTS.DESCRIPTIONS.LABIRYNTH'],
            'https://github.com/Czandi/labirynth',
            'https://labirynth-game.herokuapp.com'
          ),
          new Application(
            data['PROJECTS.TITLES.SHOPUP'],
            ['android-studio', 'java'],
            'shopup.png',
            data['PROJECTS.DESCRIPTIONS.SHOPUP'],
            'https://github.com/Czandi/shopup'
          ),
          new Application(
            data['PROJECTS.TITLES.MY_PORTFOLIO'],
            ['angular', 'sass'],
            'my-portfolio.png',
            data['PROJECTS.DESCRIPTIONS.MY_PORTFOLIO'],
            'https://github.com/Czandi/my-portfolio'
          ),
        ];
      });

    translate
      .get([
        'PROJECTS.TITLES.DOTGAMES_LAYOUT',
        'PROJECTS.TITLES.FUDLI_LEAFLET',
        'PROJECTS.TITLES.INVESTMENT_TEASER',
        'PROJECTS.TITLES.RESUME',
        'PROJECTS.TITLES.ZZIELENIAKA_LEAFLET',
        'PROJECTS.TITLES.ZZIELENIAKA_POSTER',
        'PROJECTS.DESCRIPTIONS.DOTGAMES_LAYOUT',
        'PROJECTS.DESCRIPTIONS.FUDLI_LEAFLET',
        'PROJECTS.DESCRIPTIONS.INVESTMENT_TEASER',
        'PROJECTS.DESCRIPTIONS.RESUME',
        'PROJECTS.DESCRIPTIONS.ZZIELENIAKA_LEAFLET',
        'PROJECTS.DESCRIPTIONS.ZZIELENIAKA_POSTER',
      ])
      .subscribe((res) => {
        let titles = res;
        this.graphics = [
          new Graphic(
            titles['PROJECTS.TITLES.DOTGAMES_LAYOUT'],
            'dotgames-layout.png',
            'https://drive.google.com/file/d/1Ic4yGCoqKtaYiaFGVcnEWuMJc_ShCoa-/view?usp=sharing'
          ),
          new Graphic(
            titles['PROJECTS.TITLES.FUDLI_LEAFLET'],
            'fudli-leaflet.png',
            'https://drive.google.com/file/d/1YxVJ3Xsv1EMBJYN9C9a2xW7wTO6WtwUq/view?usp=sharing'
          ),
          new Graphic(
            titles['PROJECTS.TITLES.INVESTMENT_TEASER'],
            'investment-teaser.png',
            'https://drive.google.com/file/d/1BzdX1unD4ruyZQp50lwQ4otiVSQDUjcY/view?usp=sharing'
          ),

          new Graphic(
            titles['PROJECTS.TITLES.ZZIELENIAKA_LEAFLET'],
            'zzieleniaka-leaflet.png',
            'https://drive.google.com/file/d/1_Ic0VWM2tvmx3UxekgsiXScEZnBiC0WH/view?usp=sharing'
          ),
          new Graphic(
            titles['PROJECTS.TITLES.ZZIELENIAKA_POSTER'],
            'zzieleniaka-poster.png',
            'https://drive.google.com/file/d/1VqAxFqS-Jsvkr_OafwVvt70gtT3NimzK/view?usp=sharing'
          ),
          new Graphic(
            titles['PROJECTS.TITLES.RESUME'],
            'my-cv.png',
            'https://drive.google.com/file/d/1zArdIdHlMRbwt9Xv4TCzxID-IIsfDPAd/view?usp=sharing'
          ),
        ];
      });

    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (event.url === '/portfolio') {
          let el: HTMLElement = this.scrollTo.nativeElement;
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  ngOnInit(): void {}

  changePortfolio(portfolio: string) {
    this.animation = false;
    if (portfolio !== this.selectedPortfolio) {
      this.selectedPortfolio = portfolio;

      if (portfolio === 'applications') {
        this.showApps = true;
        setTimeout(() => {
          this.showGraphics = false;
        }, 300);
      } else if (portfolio === 'graphics') {
        this.showGraphics = true;
        setTimeout(() => {
          this.showApps = false;
        }, 300);
      }
    }
  }
}
