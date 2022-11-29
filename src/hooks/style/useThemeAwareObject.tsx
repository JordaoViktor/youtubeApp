import React from 'react';
import { Theme } from '../../theme/@types/theme';
import { useTheme } from './useTheme';

type Generator<T extends {}> = (theme: Theme) => T;

const useThemeAwareObject = <T extends {}>(fn: Generator<T>) => {
  const { theme } = useTheme();

  const ThemeAwareObject = React.useMemo(
    () => fn(theme),
    [fn, theme],
  );
  return ThemeAwareObject;
};
export { useThemeAwareObject };
