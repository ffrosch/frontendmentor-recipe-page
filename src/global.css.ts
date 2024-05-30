import { globalFontFace, globalStyle } from '@vanilla-extract/css';
import { fonts, media, vars } from './theme.css.ts';

globalFontFace(fonts.outfit, {
  src: 'url(/assets/fonts/outfit/Outfit-VariableFont_wght.ttf)',
  fontStyle: 'normal',
  fontDisplay: 'swap',
});

globalFontFace(fonts.youngSerif, {
  src: 'url(/assets/fonts/young-serif/YoungSerif-Regular.ttf)',
  fontWeight: 400,
  fontStyle: 'normal',
  fontDisplay: 'swap',
});

globalStyle('body', {
  fontFamily: vars.fontFamily.text,
  fontSize: vars.fontSize.sm,
  backgroundColor: vars.color.white[400],
  minWidth: media.size.xs,
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontFamily: vars.fontFamily.heading,
  letterSpacing: '-0.025em',
});

globalStyle('h1', {
  fontSize: vars.fontSize.xl,
});

globalStyle('h2', {
  fontSize: vars.fontSize.lg,
});

globalStyle('h3', {
  fontFamily: vars.fontFamily.text,
  fontSize: vars.fontSize.md,
  letterSpacing: '-0.075em',
});
