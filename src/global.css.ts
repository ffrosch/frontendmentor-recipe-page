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
  color: vars.color.wengeBrown,
  fontFamily: vars.fontFamily.text,
  fontSize: vars.fontSize.sm,
  background: vars.color.eggShell,
  minWidth: media.size.xs,
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontFamily: vars.fontFamily.heading,
});

globalStyle('h1', {
  fontSize: vars.fontSize.xl,
  letterSpacing: '0.075rem',
  fontWeight: 700,
});

globalStyle('h2', {
  fontSize: vars.fontSize.lg,
  fontWeight: 400,
});

globalStyle('h3', {
  fontFamily: vars.fontFamily.text,
  fontSize: vars.fontSize.md,
  letterSpacing: '-0.075em',
  fontWeight: 600,
});
