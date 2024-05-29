import { createGlobalTheme } from '@vanilla-extract/css';
import { fonts } from './fonts.css.ts';

export const vars = createGlobalTheme(':root', {
  color: {
    primary: 'hsl(14, 45%, 36%)',
    accent: 'hsl(332, 51%, 32%)',
    white: {
      100: 'hsl(0, 0%, 100%)', // white
      200: 'hsl(330, 100%, 98%)', // rose white
      300: 'hsl(30, 54%, 90%)', // eggshell
      400: 'hsl(30, 18%, 87%)', // light grey
    },
    wengeBrown: 'hsl(30, 10%, 34%)',
    darkCharcoal: 'hsl(24, 5%, 18%)',
  },

  font: {
    type: {
      heading: `${fonts.youngSerif}, serif`,
      text: `${fonts.outfit}, sans-serif`,
    },
    size: {
      md: '1rem',
    },
  },
});
