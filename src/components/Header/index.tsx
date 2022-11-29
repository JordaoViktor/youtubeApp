import React from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';
import { runOnJS } from 'react-native-reanimated';

import {
  Gesture, GestureDetector,
} from 'react-native-gesture-handler';
import { useThemeAwareObject } from '@hooks/style/useThemeAwareObject';
import { useNavigation } from '@react-navigation/native';

import JordaoVictor from '@assets/images/JordaoVictor.jpg';
import Arrow from '@assets/svg/arrow.svg';
import { WithChildren } from '../../@types/utils';
import { createStyles } from './styles';

type HeaderProps = WithChildren<{
  title?: string;
  sourceImage?: string;
}>

export const Header = ({
  children,
  title,
  sourceImage,
}:HeaderProps) => {
  const Styles = useThemeAwareObject(createStyles);
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();
  const tapHandler = Gesture.Tap().onStart(() => runOnJS(goBack)());

  return (
    <View style={Styles.container}>
      <GestureDetector gesture={tapHandler}>
        <Arrow width={50} height={50} testID="Header-Arrow" />
      </GestureDetector>

      <View testID="Header-Title">
        <Text style={Styles.title}>{title}</Text>
      </View>

      <Image testID="Header-Image" style={Styles.image} source={sourceImage || JordaoVictor} />
      {children}
    </View>
  );
};

Header.defaultProps = {

};
