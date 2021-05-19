import { Colors } from '../../../assets/variables';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
  group,
  animateChild,
  keyframes,
  stagger,
} from '@angular/animations';

const animateTime = '300ms cubic-bezier(0,0,.46,.99)';

const boxSlideInAnimation = animate(
  animateTime,
  keyframes([
    style({ left: '-60px', opacity: 0 }),
    style({ left: 0, opacity: '100%' }),
  ])
);

const defaultBoxPositionStyle = {
  left: '0px',
  opacity: '100%',
};

const hideBoxPositionStyle = {
  left: '-60px',
  opacity: 0,
};

function triggerChildAnimations() {
  return group([
    query('@boxSlideIn', stagger('150ms', [animateChild()])),
    boxSlideInAnimation,
  ]);
}

function slideInAnimation() {
  return [style(defaultBoxPositionStyle), boxSlideInAnimation];
}

export const boxAnimation = trigger('boxSlideIn', [
  transition('hide => visible', slideInAnimation()),
  state('hide', style(hideBoxPositionStyle)),
  state('visibile', style(defaultBoxPositionStyle)),
]);

export const boxAnimationTrigger = trigger('boxWrapper', [
  transition('hide => visible', triggerChildAnimations()),
]);

// export const personWalkingAnimation = trigger('personWalkingSlideIn', [
//   transition('hide => visible', )
// ])
