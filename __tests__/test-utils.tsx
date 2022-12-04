import { ReactElement } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { render, RenderAPI, RenderOptions } from '@testing-library/react-native';

import ReactQueryProvider from '@services/reactQuery/Provider';
import { ThemeProvider } from '@hooks/style/useTheme';
import { DEFAULT_LIGHT_THEME } from 'src/theme/lightMode';
import { NavigationContainer } from '@react-navigation/native';

import { WithChildren } from '../src/@types/utils';

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
  },
});
jest.useFakeTimers();

const AllTheProviders = ({ children }: WithChildren) => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <ReactQueryProvider>
      <ThemeProvider initial={DEFAULT_LIGHT_THEME}>
        <SafeAreaView style={styles.mainWrapper}>
          <StatusBar barStyle="dark-content" />
          <NavigationContainer>
            {children}
          </NavigationContainer>
        </SafeAreaView>
      </ThemeProvider>
    </ReactQueryProvider>
  </GestureHandlerRootView>
);

export const screenRender = (
  ui: ReactElement,
  options = {} as RenderOptions,
): RenderAPI => render(ui, { wrapper: AllTheProviders, ...options });
