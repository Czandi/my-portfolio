import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class NavbarService {
  showNavbar = new Subject<boolean>();

  onShowNavbar(): Observable<boolean> {
    return this.showNavbar.asObservable();
  }

  setShowNavbar(showNavbar: boolean): void {
    this.showNavbar.next(showNavbar);
  }
}
