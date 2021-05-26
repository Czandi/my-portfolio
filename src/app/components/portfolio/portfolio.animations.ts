import {
  animate,
  animateChild,
  group,
  keyframes,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

const animateTime = '400ms cubic-bezier(.55, 0, .45, 1)';

const defaultToLeftAnimation = animate(
  animateTime,
  keyframes([style({ left: 0 }), style({ left: '-100%' })])
);

const leftToDefaultAnimation = animate(
  animateTime,
  keyframes([style({ left: '-100%' }), style({ left: 0 })])
);

const defaultToRightAnimation = animate(
  animateTime,
  keyframes([style({ left: 0 }), style({ left: '100%' })])
);

const rightToDefaultAnimation = animate(
  animateTime,
  keyframes([style({ left: '100%' }), style({ left: 0 })])
);

function appsToGraphicsAnimation() {
  return group([
    query('@graphicSwitch', group([animateChild(), rightToDefaultAnimation])),
    query('@appSwitch', group([animateChild(), defaultToLeftAnimation])),
  ]);
}

function graphicsToAppsAnimation() {
  return group([
    query('@graphicSwitch', group([animateChild(), defaultToRightAnimation])),
    query('@appSwitch', group([animateChild(), leftToDefaultAnimation])),
  ]);
}

export const childTrigger = trigger('childTrigger', [
  transition('applications => graphics', appsToGraphicsAnimation()),
  transition('graphics => applications', graphicsToAppsAnimation()),
]);

export const appsSwitchAnimation = trigger('appSwitch', [
  transition(':enter', [leftToDefaultAnimation]),
  transition(':leave', [defaultToLeftAnimation]),
]);

export const graphicSwitchAnimation = trigger('graphicSwitch', [
  transition(':enter', [rightToDefaultAnimation]),
  transition(':leave', [defaultToRightAnimation]),
]);
