import {
  animate,
  group,
  keyframes,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

const animateTime = '500ms cubic-bezier(0,0,.46,.99)';

const elementSlideInAnimation = animate(
  animateTime,
  keyframes([
    style({ bottom: '-100px', opacity: '0%' }),
    style({ bottom: '0px', opacity: '100%' }),
  ])
);

const defaultPositionStyle = {
  bottom: '0px',
  opacity: '100%',
};

const hidePositionStyle = {
  bottom: '-100px',
  opacity: '0%',
};

function animation() {
  return [style(defaultPositionStyle), elementSlideInAnimation];
}

export const slideInAnimation = trigger('slideIn', [
  transition('hide => visible', animation()),
  state('hide', style(hidePositionStyle)),
  state('visible', style(defaultPositionStyle)),
]);
