import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { ThemeProvider } from './src/hooks/style/useTheme';
import { Routes } from './src/routes/index.routes';
import { DEFAULT_LIGHT_THEME } from './src/theme/lightMode';

const App = () => (
  <ThemeProvider initial={DEFAULT_LIGHT_THEME}>
    <SafeAreaView style={styles.mainWrapper}>
      <StatusBar barStyle="light-content" />
      <Routes />
    </SafeAreaView>
  </ThemeProvider>
);

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
  },
});

export default App;
