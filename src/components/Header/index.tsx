import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useThemeAwareObject } from '@hooks/style/useThemeAwareObject';
import { useNavigation } from '@react-navigation/native';

import Arrow from '@assets/svg/arrow.svg';

import { WithChildren } from '../../@types/utils';
import { createStyles } from './styles';

type HeaderProps = WithChildren<{
  title?: string;
  sourceImage?: string | undefined ;
  headerArrowTestID:string;
  headerTitleTestID:string;
  headerImageTestID:string;
  handleArrowPress: () => void
}>

export const Header = ({
  children,
  title,
  sourceImage,
  headerArrowTestID,
  headerTitleTestID,
  headerImageTestID,
  handleArrowPress,
}:HeaderProps) => {
  const Styles = useThemeAwareObject(createStyles);
  const navigation = useNavigation();

  const goBack = () => {
    handleArrowPress();
    navigation.goBack();
  };

  return (
    <View style={Styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Arrow width={50} height={50} testID={headerArrowTestID} />
      </TouchableOpacity>

      <View testID={headerTitleTestID}>
        <Text style={Styles.title}>{title}</Text>
      </View>

      <Image testID={headerImageTestID} style={Styles.image} source={{ uri: sourceImage }} />
      {children}
    </View>
  );
};

Header.defaultProps = {
  headerTitleTestID: 'Header-Title',
  headerImageTestID: 'Header-Image',
  headerArrowTestID: 'Header-Arrow',
};
