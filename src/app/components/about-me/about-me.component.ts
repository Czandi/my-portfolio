import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';
import { Skill } from './skill/skill.class';
import { boxAnimation, boxAnimationTrigger } from './about-me.animations';
import { NavbarService } from '../../services/navbar.service';
import { Subscription } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [boxAnimation, boxAnimationTrigger],
})
export class AboutMeComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('container') container: ElementRef;
  @ViewChild('hamburgerWrapper') hamburgerWrapper: ElementRef;

  public frontendSkills: Skill[] = [
    new Skill('html', 'HTML5'),
    new Skill('angular', 'Angular'),
    new Skill('sass', 'Sass'),
    new Skill('js', 'JavaScript'),
    new Skill('ts', 'TypeScript'),
  ];

  public backendSkills: Skill[] = [
    new Skill('java', 'Java'),
    new Skill('spring', 'Spring Boot'),
    new Skill('mysql', 'MySQL'),
    new Skill('hibernate', 'Hibernate'),
    new Skill('postgresql', 'PostgreSQL'),
  ];

  public otherSkills: Skill[] = [
    new Skill('vsc', 'VSCode'),
    new Skill('photoshop', 'Photoshop'),
    new Skill('git', 'Git'),
    new Skill('figma', 'Figma'),
    new Skill('idea', 'Intelij Idea'),
  ];

  public showNavbar: boolean = false;
  public boxAnimation: string = 'hide';

  private navbarServiceSub: Subscription;
  private previousHeight: number = 0;

  @ViewChild('mySkillHeader') mySkillHeader: ElementRef;

  constructor(private navbarService: NavbarService, router: Router) {
    this.navbarServiceSub = this.navbarService
      .onShowNavbar()
      .subscribe((showNavbar) => {
        this.showNavbar = showNavbar;
      });

    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (event.url === '/about-me') {
          let el: HTMLElement = this.container.nativeElement;
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.onResize();
    }, 500);
  }

  ngOnDestroy(): void {
    this.navbarServiceSub.unsubscribe();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    let elementOffset: number =
      this.mySkillHeader.nativeElement.getBoundingClientRect().top;
    let viewHeight: number = window.innerHeight;
    if (elementOffset <= viewHeight * 0.8 && this.boxAnimation === 'hide') {
      this.boxAnimation = 'visible';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    let containerHeight = this.container.nativeElement.clientHeight;
    if (this.previousHeight !== containerHeight) {
      this.previousHeight = containerHeight;
      this.hamburgerWrapper.nativeElement.setAttribute(
        'style',
        'height: ' + containerHeight + 'px'
      );
    }
  }
}
