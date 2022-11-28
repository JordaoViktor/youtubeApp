import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Routes} from './src/routes/index.routes';

const App = () => {
  return (
    <SafeAreaView style={styles.mainWrapper}>
      <StatusBar barStyle="light-content" />
      <Routes />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
  },
});

export default App;
