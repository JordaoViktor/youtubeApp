import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from '@screens/Login';
import { HomeScreen } from '@screens/Home';

import { type RootStackParamListType } from '../@types/navigation';

const { Screen, Navigator } = createNativeStackNavigator<RootStackParamListType>();

const Routes = () => (
  <NavigationContainer>
    <Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={LoginScreen} />
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  </NavigationContainer>
);

export { Routes };
