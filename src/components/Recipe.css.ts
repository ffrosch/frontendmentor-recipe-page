import { style } from '@vanilla-extract/css';
import { media, vars } from '../theme.css.ts';

export const recipe = style({
  backgroundColor: vars.color.white[100],
  lineHeight: 2,

  '@media': {
    [media.query.sm]: {
      maxWidth: '46rem',
      borderRadius: '1.5rem',
      margin: `min(max(calc((100% - ${media.size.sm}px) / 4), 0.25rem), 8rem)`,
    },
  },
});

export const imageContainer = style({
  maxWidth: '100%',
  height: 175,

  '@media': {
    [media.query.sm]: {
      height: `min(calc(80vw - 175px), 300px)`,
      margin: vars.space.lg,
    },
  },
});

export const image = style({
  '@media': {
    [media.query.sm]: {
      borderRadius: '0.75rem',
    },
  },
});

export const section = style({
  margin: `${vars.space.md} ${vars.space.lg}`,
});

export const title = style({
  color: vars.color.darkCharcoal,
  marginBottom: vars.space.sm,
  letterSpacing: '0.075rem',
});

export const preparationContainer = style({
  background: vars.color.white[200],
  padding: vars.space.sm,
  paddingLeft: vars.space.md,
  marginTop: vars.space.md,
  marginBottom: vars.space.lg,
});

export const preparationHeading = style({
  color: vars.color.accent,
  marginBottom: vars.space.xs,
  letterSpacing: 0,
});

export const sectionHeading = style({
  color: vars.color.primary,
  marginBottom: vars.space.sm,
});

export const hr = style({
  height: 1,
  margin: `0 ${vars.space.lg}`,
  border: 'none',
  background: vars.color.white[400],
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
