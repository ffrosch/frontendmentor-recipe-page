import { style } from '@vanilla-extract/css';
import { media, vars } from '../theme.css.ts';

export const recipe = style({
  backgroundColor: vars.color.white,

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
      margin: vars.space.xl,
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
  margin: `${vars.space.md} ${vars.space.xl}`,
});

export const sectionHeading = style({
  color: vars.color.primary,
  marginBottom: vars.space.sm,
});

export const title = style({
  color: vars.color.darkCharcoal,
  marginBottom: vars.fontSize.md,
});

export const preparationContainer = style({
  background: vars.color.roseWhite,
  padding: vars.space.md,
  paddingLeft: vars.space.md,
  borderRadius: '0.75rem',
  marginTop: vars.space.md,
  marginBottom: vars.space.xl,
});

export const preparationHeading = style({
  color: vars.color.accent,
  marginBottom: vars.space.xs,
  letterSpacing: 0,
});

export const ul = style({
  paddingLeft: vars.fontSize.md,
});

export const li = style({
  paddingLeft: vars.fontSize.md,
  marginBottom: vars.space.xs,
  selectors: {
    '&::marker': {
      fontSize: '0.75em',
      color: vars.color.primary,
    },
    [`${preparationContainer} &::marker`]: {
      color: vars.color.accent,
    },
    [`${section} ol &::marker`]: {
      fontSize: '1em',
      fontWeight: 700,
    },
  },
});

export const hr = style({
  height: 1,
  margin: `0 ${vars.space.xl}`,
  border: 'none',
  background: vars.color.lightGrey,
});

export const table = style({
  width: '100%',
  borderCollapse: 'collapse',
  textAlign: 'left',
});

export const caption = style({
  marginBottom: vars.space.sm,
});

export const tr = style({
  border: `1px solid ${vars.color.lightGrey}`,
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
  paddingLeft: vars.space.lg,
});

export const td = style({
  color: vars.color.primary,
  fontWeight: 700,
  padding: '0.75rem 0',
  paddingRight: vars.space.lg,
});
