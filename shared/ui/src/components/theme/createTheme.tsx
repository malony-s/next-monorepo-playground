import { Property } from 'csstype';

type ColorType = 'main' | 'light' | 'dark';

export type PaletteColor =
  | string
  | {
      [key in ColorType]?: Property.AccentColor;
    };

type Palette =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'success'
  | 'error'
  | 'info';

export type Theme = {
  [key in Palette]: PaletteColor;
};

const DefaultTheme: Theme = {
  primary: '#1976d2',
  secondary: '#9c27b0',
  warning: '#ed6c02',
  success: '#2e7d32',
  error: '#d32f2f',
  info: '#0288d1',
};

const createTheme = (optionalTheme: Partial<Theme>): Theme => {
  return Object.assign(DefaultTheme, optionalTheme);
};

export default createTheme;
