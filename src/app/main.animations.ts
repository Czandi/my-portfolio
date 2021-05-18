import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';

const animateTime = '600ms 2000ms cubic-bezier(.55,0,.45,1)';

const animation = animate(
  animateTime,
  keyframes([
    style({ top: 0, borderRadius: 0 }),
    style({ top: '-100vh', borderRadius: '100%' }),
  ])
);

const defaultPosition = {
  top: '0vh',
};

function slideOut() {
  return [style(defaultPosition), animation];
}

export const slideOutAnimation = trigger('slideOut', [
  transition(':enter', slideOut()),
]);
