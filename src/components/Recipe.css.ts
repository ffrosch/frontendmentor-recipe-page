import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css.ts';

export const title = style({
  color: vars.color.darkCharcoal,
});

export const prepTime = style({
  color: vars.color.accent,
});

export const sectionHeading = style({
  color: vars.color.primary,
});
