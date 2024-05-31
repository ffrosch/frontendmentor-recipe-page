import { style } from '@vanilla-extract/css';

export const main = style({
  display: 'grid',
  placeItems: 'center',
  height: '100%',
  minHeight: '100dvh',
  width: '100%',
  minWidth: '100vw',
});

export const loader = style({
  marginTop: 'auto',
  alignSelf: 'center',
});
