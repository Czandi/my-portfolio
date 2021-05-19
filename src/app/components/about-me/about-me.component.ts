import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
  OnDestroy,
} from '@angular/core';
import { Skill } from './skill/skill.class';
import { boxAnimation, boxAnimationTrigger } from './about-me.animations';
import { NavbarService } from '../../services/navbar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [boxAnimation, boxAnimationTrigger],
})
export class AboutMeComponent implements OnInit, OnDestroy {
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

  @ViewChild('mySkillHeader') mySkillHeader: ElementRef;

  constructor(private navbarService: NavbarService) {
    this.navbarServiceSub = this.navbarService
      .onShowNavbar()
      .subscribe((showNavbar) => {
        this.showNavbar = showNavbar;
      });
  }

  ngOnInit(): void {}

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

  toggleNavbar(): void {
    this.showNavbar = !this.showNavbar;
    this.navbarService.setShowNavbar(this.showNavbar);
  }
}
