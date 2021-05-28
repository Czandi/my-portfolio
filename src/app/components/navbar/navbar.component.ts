import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Input() style: string;

  private navbarServiceSub: Subscription;

  public showNavbar: boolean = false;

  constructor(private navbarService: NavbarService, private router: Router) {}

  ngOnInit(): void {
    this.navbarServiceSub = this.navbarService
      .onShowNavbar()
      .subscribe((showNavbar) => {
        this.showNavbar = showNavbar;
      });
  }

  ngOnDestroy(): void {
    this.navbarServiceSub.unsubscribe();
  }

  ngAfterViewInit(): void {}

  toggleNavbar() {
    this.showNavbar = !this.showNavbar;
    this.navbarService.setShowNavbar(this.showNavbar);
  }

  goTo(element: string) {
    this.router.navigate(['/' + element]);
  }
}
