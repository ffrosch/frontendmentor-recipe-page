import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css.ts';

export const footer = style({
  textAlign: 'center',
  alignSelf: 'end',
  padding: '1rem',
});

export const a = style({
  color: vars.color.primary,
});
