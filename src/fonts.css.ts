import { globalFontFace } from '@vanilla-extract/css';

export const fonts = {
  outfit: "'Outfit'",
  youngSerif: "'Young Serif'",
};

globalFontFace(fonts.outfit, {
  src: 'url(./assets/fonts/outfit/Outfit-VariableFont_wght.ttf)',
  fontWeight: [400, 600, 700],
  fontStyle: 'normal',
  fontDisplay: 'swap',
});

globalFontFace(fonts.youngSerif, {
  src: 'url(./assets/fonts/young-serif/YoungSerif-Regular.ttf)',
  fontWeight: 400,
  fontStyle: 'normal',
  fontDisplay: 'swap',
});
