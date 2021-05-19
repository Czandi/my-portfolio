import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() style: string;

  private navbarServiceSub: Subscription;

  public showNavbar: boolean = false;

  constructor(private navbarService: NavbarService) {}

  ngOnInit(): void {
    this.navbarServiceSub = this.navbarService
      .onShowNavbar()
      .subscribe((showNavbar) => {
        this.showNavbar = showNavbar;
      });
  }
}
