import { createGlobalTheme } from '@vanilla-extract/css';

const mediaSizes = {
  xs: 320,
  sm: 500,
};

export const fonts = {
  outfit: "'Outfit'",
  youngSerif: "'Young Serif'",
};

export const media = {
  size: {
    xs: mediaSizes.xs,
    sm: mediaSizes.sm,
  },
  query: {
    xs: `(min-width: ${mediaSizes.xs}px)`,
    sm: `(min-width: ${mediaSizes.sm}px)`,
  },
};

export const vars = createGlobalTheme(':root', {
  color: {
    primary: 'hsl(14, 45%, 36%)',
    accent: 'hsl(332, 51%, 32%)',
    white: 'hsl(0, 0%, 100%)',
    lightGrey: 'hsl(30, 18%, 87%)',
    roseWhite: 'hsl(330, 100%, 98%)',
    eggShell: 'hsl(30, 54%, 90%)',
    wengeBrown: 'hsl(30, 10%, 34%)',
    darkCharcoal: 'hsl(24, 5%, 18%)',
  },

  space: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.75rem',
    lg: '2rem',
    xl: '2.5rem',
  },

  fontFamily: {
    heading: `${fonts.youngSerif}, serif`,
    text: `${fonts.outfit}, sans-serif`,
  },

  fontSize: {
    xs: '0.875rem',
    sm: '1rem',
    md: '1.25rem',
    lg: '1.75rem',
    xl: '2.25rem',
  },
});
