import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css.ts';

globalStyle('body', {
  fontFamily: vars.font.type.text,
  backgroundColor: vars.color.white[300],
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontFamily: vars.font.type.heading,
});
