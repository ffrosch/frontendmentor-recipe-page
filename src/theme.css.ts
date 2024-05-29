import { createGlobalTheme } from '@vanilla-extract/css';
import { fonts } from './fonts.css.ts';

export const vars = createGlobalTheme(':root', {
  color: {
    primary: 'hsl(14, 45%, 36%)',
    accent: 'hsl(332, 51%, 32%)',
    white: 'hsl(0, 0%, 100%)',
    whiteRose: 'hsl(330, 100%, 98%)',
    whiteEggshell: 'hsl(30, 54%, 90%)',
    greyLight: 'hsl(30, 18%, 87%)',
    brownLight: 'hsl(30, 10%, 34%)',
    charcoalDark: 'hsl(24, 5%, 18%)',
  },

  font: {
    type: {
      heading: `${fonts.youngSerif}, serif`,
      text: `${fonts.outfit}, sans-serif`,
    },
    size: {
      medium: '16px',
    },
  },
});
