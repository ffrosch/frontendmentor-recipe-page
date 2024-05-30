import { style } from '@vanilla-extract/css';
import { media, vars } from '../theme.css.ts';

export const recipe = style({
  width: '100%',
  backgroundColor: vars.color.white[100],
  lineHeight: 2,

  '@media': {
    [media.query.sm]: {
      maxWidth: '46rem',
      borderRadius: '1.5rem',
      padding: '2.5rem',
    },
  },
});

export const image = style({
  width: '100%',
  height: 175,

  '@media': {
    [media.query.sm]: {
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

export const table = style({
  width: '100%',
  borderCollapse: 'collapse',
  textAlign: 'left',
});

export const tr = style({
  border: `1px solid ${vars.color.white[400]}`,
  borderLeft: 'none',
  borderRight: 'none',

  selectors: {
    '&:first-child': {
      border: 'none',
    },
    '&:last-child': {
      border: 'none',
    },
  },
});

export const th = style({
  textTransform: 'capitalize',
  paddingLeft: '2rem',
});

export const td = style({
  color: vars.color.primary,
  fontWeight: 'bold',
  paddingRight: '2rem',
});
