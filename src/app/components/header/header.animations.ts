import {
  animate,
  keyframes,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

const animateTime = '500ms cubic-bezier(.55,0,.45,1)';

const iconsEnterFromBottomAnimation = animate(
  animateTime,
  keyframes([
    style({ bottom: '-50vh', offset: 0 }),
    style({ bottom: '-0.2vh', offset: 1 }),
  ])
);

const iconsEnterFromTopAnimation = animate(
  animateTime,
  keyframes([
    style({ top: '-15vh', offset: 0 }),
    style({ top: '0', offset: 1 }),
  ])
);

const iconsPopUpAnimation = animate(
  animateTime,
  keyframes([
    style({ transform: 'scale(0)', offset: 0 }),
    style({ transform: 'scale(1.2)', offset: 0.7 }),
    style({ transform: 'scale(1)', offset: 1 }),
  ])
);

const iconsDefaultBottomPositionStyle = {
  bottom: '-0.2vh',
};

const iconsDefaultTopPositionStyle = {
  top: '0',
};

const iconsHideBottomPositionStyle = {
  bottom: '-50vh',
};

const iconsHideTopPositionStyle = {
  top: '-15vh',
};

const hidePopUpStyle = {
  transform: 'scale(0)',
};

const deafultPopUpStyle = {
  transform: 'scale(1)',
};

function enterIconsFromBottomAnimation() {
  return [
    style(iconsDefaultBottomPositionStyle),
    iconsEnterFromBottomAnimation,
  ];
}

function enterIconsFromTopAnimation() {
  return [style(iconsDefaultTopPositionStyle), iconsEnterFromTopAnimation];
}

function enterIconsPopUpAnimation() {
  return [style(deafultPopUpStyle), iconsPopUpAnimation];
}

export const slideFromTopAnimation = trigger('slideFromTopIconAnimation', [
  transition('hide => visible', enterIconsFromTopAnimation()),
  state('hide', style(iconsHideTopPositionStyle)),
  state('visibile', style(iconsDefaultTopPositionStyle)),
]);

export const slideFromBottomAnimation = trigger(
  'slideFromBottomIconAnimation',
  [
    transition('hide => visible', enterIconsFromBottomAnimation()),
    state('hide', style(iconsHideBottomPositionStyle)),
    state('visible', style(iconsDefaultBottomPositionStyle)),
  ]
);

export const popUpAnimation = trigger('popUp', [
  transition('hide => visible', enterIconsPopUpAnimation()),
  state('hide', style(hidePopUpStyle)),
  state('visible', style(deafultPopUpStyle)),
]);
