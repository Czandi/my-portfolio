import {
  animate,
  keyframes,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

const animateTime = '500ms cubic-bezier(.55,0,.45,1)';

const iconsEnterAnimation = animate(
  animateTime,
  keyframes([
    style({ bottom: '-50vh', offset: 0 }),
    style({ bottom: '-0.2vh', offset: 1 }),
  ])
);

const iconsDefaultPositionStyle = {
  bottom: '-0.2vh',
};

function enterIconsAnimation() {
  return [style(iconsDefaultPositionStyle), iconsEnterAnimation];
}

export const iconAnimation = trigger('enterIconAnimation', [
  transition(':enter', enterIconsAnimation()),
]);
