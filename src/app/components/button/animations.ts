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
} from '@angular/animations';

const animateTime = '400ms cubic-bezier(.55,0,.45,1)';

const bottomButtonSwitchAnimationForward = animate(
  animateTime,
  keyframes([
    style({ left: '-7px', top: '5px', zIndex: 1 }),
    style({ left: '-47px', top: '35px' }),
    style({ left: '0', top: '0', zIndex: 2 }),
  ])
);

const bottomButtonSwitchAnimationBackward = animate(
  animateTime,
  keyframes([
    style({ left: '0', top: '0', zIndex: 2 }),
    style({ left: '-47px', top: '35px' }),
    style({ left: '-7px', top: '5px', zIndex: 1 }),
  ])
);

const topButtonSwitchAnimationForward = animate(
  animateTime,
  keyframes([
    style({ left: '0', top: '0', zIndex: 2 }),
    style({ left: '40px', top: '-30px' }),
    style({ left: '-7px', top: '5px', zIndex: 1 }),
  ])
);

const topButtonSwitchAnimationBackward = animate(
  animateTime,
  keyframes([
    style({ left: '-7px', top: '5px', zIndex: 1 }),
    style({ left: '40px', top: '-30px' }),
    style({ left: '0', top: '0', zIndex: 2 }),
  ])
);

const deafultTopPositionStyle = {
  top: 0,
  left: 0,
  zIndex: 2,
};
const defaultBottomPositionStyle = {
  left: '-7px',
  top: '5px',
  zIndex: 1,
};

function switchButtons0() {
  return group([
    query(
      '@bottomButtonSwitch',
      group([animateChild(), bottomButtonSwitchAnimationForward])
    ),
    query(
      '@topButtonSwitch',
      group([animateChild(), topButtonSwitchAnimationForward])
    ),
  ]);
}

function switchButtons1() {
  return group([
    query(
      '@bottomButtonSwitch',
      group([animateChild(), topButtonSwitchAnimationForward])
    ),
    query(
      '@topButtonSwitch',
      group([animateChild(), bottomButtonSwitchAnimationForward])
    ),
  ]);
}

//
export const expansionTriggerAnimation = trigger('expansionTrigger', [
  transition('on => off', switchButtons1()),
  transition('off => on', switchButtons0()),
]);

export const topButtonSwitch = trigger('topButtonSwitch', [
  state('on', style(defaultBottomPositionStyle)),
  state('off', style(deafultTopPositionStyle)),
]);

export const bottomButtonSwitch = trigger('bottomButtonSwitch', [
  state('on', style(deafultTopPositionStyle)),
  state('off', style(defaultBottomPositionStyle)),
]);
