import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';
import { Skill } from './skill/skill.class';
import { boxAnimation, boxAnimationTrigger } from './about-me.animations';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [boxAnimation, boxAnimationTrigger],
})
export class AboutMeComponent implements OnInit {
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

  public boxAnimation: string = 'hide';

  @ViewChild('mySkillHeader') mySkillHeader: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    let elementOffset: number =
      this.mySkillHeader.nativeElement.getBoundingClientRect().top;
    let viewHeight: number = window.innerHeight;
    if (elementOffset <= viewHeight * 0.8 && this.boxAnimation === 'hide') {
      this.boxAnimation = 'visible';
    }
  }
}
