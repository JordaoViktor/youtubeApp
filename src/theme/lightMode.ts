import { ColorTheme, SpacingTheme, Theme } from './@types/theme';

const DEFAULT_LIGHT_COLOR_THEME: ColorTheme = {
  primary: '#FFFFFF',
  secondary: '#191919',
  surface: '#E6E8E6',
  detail: '#F15025',
  background: '#CED0CE',
};

const DEFAULT_LIGHT_SPACING_THEME: SpacingTheme = {
  base: 8,
  double: 16,
};
export const DEFAULT_LIGHT_THEME_ID = 'default-light';

export const DEFAULT_LIGHT_THEME: Theme = {
  id: DEFAULT_LIGHT_THEME_ID,
  color: DEFAULT_LIGHT_COLOR_THEME,
  spacing: DEFAULT_LIGHT_SPACING_THEME,
};
