import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamListType = {
  Home: undefined;
  DetailsScreen: undefined;
};

type HomeScreenProps = StackNavigationProp<RootStackParamListType, 'Home'>;
type DetailsScreenProps = StackNavigationProp<
  RootStackParamListType,
  'DetailsScreen'
>;

const { Screen, Navigator } = createNativeStackNavigator<RootStackParamListType>();

const HomeScreen = () => {
  const navigation = useNavigation<DetailsScreenProps>();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
      }}
    >
      <Text>Home Screen</Text>
      <TouchableOpacity
        style={{ width: 300, height: 100, backgroundColor: 'purple' }}
        testID="test1"
        onPress={() => {
          navigation.navigate('DetailsScreen');
        }}
      >
        <Text>Navigation</Text>
      </TouchableOpacity>
    </View>
  );
};

const DetailsScreen = () => {
  const navigation = useNavigation<HomeScreenProps>();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
      }}
    >
      <Text>Details Screen</Text>
      <TouchableOpacity
        style={{ width: 300, height: 100, backgroundColor: 'purple' }}
        testID="test2"
        onPress={() => {
          navigation.navigate('Home');
        }}
      >
        <Text>Navigation</Text>
      </TouchableOpacity>
    </View>
  );
};

const Routes = () => (
  <NavigationContainer>
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="DetailsScreen" component={DetailsScreen} />
    </Navigator>
  </NavigationContainer>
);

export { Routes, HomeScreen, DetailsScreen };
