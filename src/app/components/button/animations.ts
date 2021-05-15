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

const topButtonSwitchAnimationForward = animate(
  animateTime,
  keyframes([
    style({ left: '0', top: '0', zIndex: 2 }),
    style({ left: '40px', top: '-30px' }),
    style({ left: '-7px', top: '5px', zIndex: 1 }),
  ])
);

const topButtonToDisableAnimation = animate(animateTime, keyframes([]));

const bottomButtonToDisableAnimation = animate(animateTime, keyframes([]));

const bottomButtonSwitchAnimationBackward = animate(
  animateTime,
  keyframes([
    style({ left: '0', top: '0', zIndex: 2 }),
    style({ left: '-47px', top: '35px' }),
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

const disableTopButtonStyle = {
  backgroundColor: Colors.light,
  boxShadow: 'inset 5px 5px 10px rgba(0, 0, 0, 0.25)',
};

const disableBottomButtonStyle = {
  opacity: 0,
};

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

function offToOnAnimation() {
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

function onToOffAnimation() {
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

function toDisableAnimation() {
  return group([
    query(
      '@bottomButtonSwitch',
      group([animateChild(), bottomButtonToDisableAnimation])
    ),
    query(
      '@topButtonSwitch',
      group([animateChild(), topButtonToDisableAnimation])
    ),
  ]);
}

function fromDisableAnimation() {
  return group([
    query('@bottomButtonSwitch', group([])),
    query('@topButtonSwitch', group([])),
  ]);
}

export const expansionTriggerAnimation = trigger('expansionTrigger', [
  transition('on => off', onToOffAnimation()),
  transition('off => on', offToOnAnimation()),
  transition('* => disable', toDisableAnimation()),
  transition('disable => *', fromDisableAnimation()),
]);

export const topButtonSwitch = trigger('topButtonSwitch', [
  state('on', style(defaultBottomPositionStyle)),
  state('off', style(deafultTopPositionStyle)),
  state('disable', style(disableTopButtonStyle)),
]);

export const bottomButtonSwitch = trigger('bottomButtonSwitch', [
  state('on', style(deafultTopPositionStyle)),
  state('off', style(defaultBottomPositionStyle)),
  state('disable', style(disableBottomButtonStyle)),
]);
