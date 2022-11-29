import React from 'react';
import {
  Text, TouchableOpacity, View,
} from 'react-native';

import { useThemeAwareObject } from '@hooks/style/useThemeAwareObject';

import { createStyles } from './styles';

export const HomeScreen = () => {
  const Styles = useThemeAwareObject(createStyles);

  return (
    <View
      style={Styles.container}
    >
      <Text>Home Screen</Text>
      <TouchableOpacity
        style={{ width: 300, height: 100, backgroundColor: 'purple' }}
        testID="test1"
        onPress={() => {

        }}
      >
        <Text>Navigation</Text>
      </TouchableOpacity>
    </View>
  );
};
