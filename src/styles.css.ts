import { style } from '@vanilla-extract/css';

export const srOnly = style({
  position: 'absolute',
  left: -10000,
  top: 'auto',
  width: 1,
  height: 1,
  overflow: 'hidden',
});
