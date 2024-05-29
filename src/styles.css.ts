import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from './theme.css.ts';

globalStyle('body', {
  backgroundColor: vars.color.whiteEggshell,
});

export const main = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
});

export const h1 = style({
  fontFamily: vars.font.type.heading,
});
