import React from 'react';
import {
  Text, TouchableOpacity, View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { StackNavigationProp } from '@react-navigation/stack';

import { useThemeAwareObject } from '@hooks/style/useThemeAwareObject';

import { createStyles } from './styles';
import { RootStackParamListType } from '../../@types/navigation';

type DetailsScreenProps = StackNavigationProp<
  RootStackParamListType,
  'DetailsScreen'
>;

export const HomeScreen = () => {
  const navigation = useNavigation<DetailsScreenProps>();
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
          navigation.navigate('DetailsScreen');
        }}
      >
        <Text>Navigation</Text>
      </TouchableOpacity>
    </View>
  );
};
