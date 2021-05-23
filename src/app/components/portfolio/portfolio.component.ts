import { Component, OnInit } from '@angular/core';
import { Application } from './application/application.class';
import { Graphic } from './graphic/graphic.class';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  public selectedPortfolio: string = 'applications';
  public animation: boolean = true;

  public applications: Application[];

  public graphics: Graphic[];

  constructor(private translate: TranslateService) {
    translate
      .get([
        'PROJECTS.LABIRYNTH',
        'PROJECTS.ANGELIKA_PORTFOLIO',
        'PROJECTS.LESSON_JOURNAL',
        'PROJECTS.INV_SYSTEM',
        'PROJECTS.MARIOWOZ',
        'PROJECTS.SHOPUP',
        'PROJECTS.MY_PORTFOLIO',
      ])
      .subscribe((res) => {
        let titles = res;
        this.applications = [
          new Application(
            titles['PROJECTS.ANGELIKA_PORTFOLIO'],
            ['angular', 'sass'],
            'angelika_portfolio.png',
            'Phasellus consequat facilisis felis sed gravida. Mauris volutpat eros quis nunc aliquam commodo sit amet'
          ),
          new Application(
            titles['PROJECTS.INV_SYSTEM'],
            ['spring', 'angular', 'mysql', 'electron', 'sass'],
            'inv_system.png',
            'Phasellus consequat facilisis felis sed gravida. Mauris volutpat eros quis nunc aliquam commodo sit amet'
          ),
          new Application(
            titles['PROJECTS.LESSON_JOURNAL'],
            ['spring', 'angular', 'sass', 'mysql'],
            'lesson_journal.png',
            'Phasellus consequat facilisis felis sed gravida. Mauris volutpat eros quis nunc aliquam commodo sit amet'
          ),
          new Application(
            titles['PROJECTS.MARIOWOZ'],
            ['angular', 'sass'],
            'mariowoz.png',
            'Phasellus consequat facilisis felis sed gravida. Mauris volutpat eros quis nunc aliquam commodo sit amet'
          ),
          new Application(
            titles['PROJECTS.LABIRYNTH'],
            ['js', 'css', 'html'],
            'labirynth.png',
            'Phasellus consequat facilisis felis sed gravida. Mauris volutpat eros quis nunc aliquam commodo sit amet'
          ),
          new Application(
            titles['PROJECTS.SHOPUP'],
            ['android-studio', 'java'],
            'shopup.png',
            'Phasellus consequat facilisis felis sed gravida. Mauris volutpat eros quis nunc aliquam commodo sit amet'
          ),
          new Application(
            titles['PROJECTS.MY_PORTFOLIO'],
            ['angular', 'sass'],
            'my_portfolio.png',
            'Phasellus consequat facilisis felis sed gravida. Mauris volutpat eros quis nunc aliquam commodo sit amet'
          ),
        ];
      });

    translate
      .get([
        'PROJECTS.DOTGAMES_LAYOUT',
        'PROJECTS.FUDLI_LEAFLET',
        'PROJECTS.INVESTMENT_TEASER',
        'PROJECTS.RESUME',
        'PROJECTS.ZZIELENIAKA_LEAFLET',
        'PROJECTS.ZZIELENIAKA_POSTER',
      ])
      .subscribe((res) => {
        let titles = res;
        this.graphics = [
          new Graphic(
            titles['PROJECTS.DOTGAMES_LAYOUT'],
            'dotgames-layout.png',
            'Lorem ipsum lalal waf lhjegskh sehjksefhk sehkhkenkbjhke bfhjkhbsefb hjbesf'
          ),
          new Graphic(
            titles['PROJECTS.FUDLI_LEAFLET'],
            'fudli-leaflet.png',
            'Lorem ipsum lalal waf lhjegskh sehjksefhk sehkhkenkbjhke bfhjkhbsefb hjbesf'
          ),
          new Graphic(
            titles['PROJECTS.INVESTMENT_TEASER'],
            'investment-teaser.png',
            'Lorem ipsum lalal waf lhjegskh sehjksefhk sehkhkenkbjhke bfhjkhbsefb hjbesf'
          ),

          new Graphic(
            titles['PROJECTS.ZZIELENIAKA_LEAFLET'],
            'zzieleniaka-leaflet.png',
            'Lorem ipsum lalal waf lhjegskh sehjksefhk sehkhkenkbjhke bfhjkhbsefb hjbesf'
          ),
          new Graphic(
            titles['PROJECTS.ZZIELENIAKA_POSTER'],
            'zzieleniaka-poster.png',
            'Lorem ipsum lalal waf lhjegskh sehjksefhk sehkhkenkbjhke bfhjkhbsefb hjbesf'
          ),
          new Graphic(
            titles['PROJECTS.RESUME'],
            'my-cv.png',
            'Lorem ipsum lalal waf lhjegskh sehjksefhk sehkhkenkbjhke bfhjkhbsefb hjbesf'
          ),
        ];
      });
  }

  ngOnInit(): void {}

  changePortfolio(portfolio: string) {
    this.animation = false;
    if (portfolio !== this.selectedPortfolio) {
      this.selectedPortfolio = portfolio;
    }
  }
}
