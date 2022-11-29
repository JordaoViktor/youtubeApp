import React from 'react';
import {
  Text, View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { StackNavigationProp } from '@react-navigation/stack';

import { useThemeAwareObject } from '@hooks/style/useThemeAwareObject';

import { Button } from '@components/Button';
import { createStyles } from './styles';
import { RootStackParamListType } from '../../@types/navigation';

type DetailsScreenProps = StackNavigationProp<
  RootStackParamListType,
  'Home'
>;

export const LoginScreen = () => {
  const navigation = useNavigation<DetailsScreenProps>();
  const Styles = useThemeAwareObject(createStyles);

  return (
    <View
      style={Styles.container}
    >
      <Text style={Styles.mainTitle}>Login</Text>

      <View style={Styles.signinWrapper}>
        <Button
          text="Sign in"
          onPress={() => { console.log('hello button'); }}
        />
      </View>
    </View>
  );
};
