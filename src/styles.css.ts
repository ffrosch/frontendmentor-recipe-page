import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from './theme.css.ts';

export const srOnly = style({
  position: 'absolute',
  left: -10000,
  top: 'auto',
  width: 1,
  height: 1,
  overflow: 'hidden',
});

globalStyle('body', {
  fontFamily: vars.font.type.text,
  backgroundColor: vars.color.white[400],
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontFamily: vars.font.type.heading,
});
