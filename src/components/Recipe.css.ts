import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css.ts';

export const recipe = style({
  width: '100%',
  backgroundColor: vars.color.white[100],

  '@media': {
    '(min-width: 500px)': {
      maxWidth: '46rem',
      borderRadius: '1.5rem',
      padding: '2.5rem',
    },
  },
});

export const title = style({
  color: vars.color.darkCharcoal,
});

export const image = style({
  width: '100%',
  height: 175,

  '@media': {
    '(min-width: 500px)': {
      height: 300,
      borderRadius: '0.75rem',
    },
  },
});

export const title = style({
  color: vars.color.darkCharcoal,
});

export const prepTime = style({
  color: vars.color.accent,
});

export const sectionHeading = style({
  color: vars.color.primary,
});
