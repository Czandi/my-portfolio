import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  public selectedPortfolio: string = 'applications';

  constructor() {}

  ngOnInit(): void {}

  changePortfolio(portfolio: string) {
    if (portfolio !== this.selectedPortfolio) {
      this.selectedPortfolio = portfolio;
    }
  }
}
