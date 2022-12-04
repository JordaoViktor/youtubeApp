import React from 'react';
import {
  Platform, SafeAreaView, StatusBar, StyleSheet,
} from 'react-native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ReactQueryProvider from '@services/reactQuery/Provider';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { ThemeProvider } from './src/hooks/style/useTheme';
import { Routes } from './src/routes/index.routes';

import { DEFAULT_LIGHT_THEME } from './src/theme/lightMode';

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
  },
});

const { CLIENT_ID_IOS, CLIENT_ID_ANDROID } = process.env;
const PlatformVerification = Platform.OS === 'ios' ? CLIENT_ID_IOS : '304910963007-nikd33kkakg4vhomfom2qa3s76rgb0pe.apps.googleusercontent.com';

GoogleSignin.configure({
  webClientId: PlatformVerification,
});

const App = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <ReactQueryProvider>
      <ThemeProvider initial={DEFAULT_LIGHT_THEME}>
        <SafeAreaView style={styles.mainWrapper}>
          <StatusBar barStyle="dark-content" />
          <Routes />
        </SafeAreaView>
      </ThemeProvider>
    </ReactQueryProvider>
  </GestureHandlerRootView>
);

export default App;
