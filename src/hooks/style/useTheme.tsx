import React, {
  createContext, memo, useCallback, useMemo, useState,
} from 'react';
import {
  DEFAULT_DARK_THEME,
} from '../../theme/darkMode';

import {
  DEFAULT_LIGHT_THEME,
} from '../../theme/lightMode';
import { Theme } from '../../theme/@types/theme';
import { WithChildren } from '../../@types/utils';

interface ProvidedValue {
  theme: Theme;
  toggleTheme: () => void;
}

const Context = createContext<ProvidedValue>({
  theme: DEFAULT_LIGHT_THEME,
  toggleTheme: () => {
    console.log('ThemeProvider is not rendered!');
  },
});

type ThemeProps = WithChildren<{
  initial: Theme,
}>

type ThemeTypes = {
 [ DEFAULT_THEME_ID: string]: () => Theme,
}

const themeTypes: ThemeTypes = {
  DEFAULT_LIGHT_THEME_ID: () => DEFAULT_DARK_THEME,
  DEFAULT_DARK_THEME_ID: () => DEFAULT_LIGHT_THEME,
};

export const ThemeProvider = memo<ThemeProps>((props: ThemeProps) => {
  const [theme, setTheme] = useState<Theme>(props.initial);

  const ToggleThemeCallback = useCallback(() => {
    setTheme((currentTheme) => themeTypes[currentTheme.id]());
  }, []);

  const MemoizedValue = useMemo(() => {
    const value: ProvidedValue = {
      theme,
      toggleTheme: ToggleThemeCallback,
    };
    return value;
  }, [theme, ToggleThemeCallback]);

  return (
    <Context.Provider value={MemoizedValue}>
      {props.children}
    </Context.Provider>
  );
});

export const useTheme = () => React.useContext(Context);
