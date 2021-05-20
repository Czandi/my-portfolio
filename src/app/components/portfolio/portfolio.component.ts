import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  public selectedPortfolio: string = 'applications';
  public animation: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  changePortfolio(portfolio: string) {
    this.animation = false;
    if (portfolio !== this.selectedPortfolio) {
      this.selectedPortfolio = portfolio;
    }
  }
}
