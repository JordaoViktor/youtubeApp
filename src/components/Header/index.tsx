import React, { useCallback } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useThemeAwareObject } from '@hooks/style/useThemeAwareObject';
import { useNavigation } from '@react-navigation/native';

import JordaoVictor from '@assets/images/JordaoVictor.jpg';
import Arrow from '@assets/svg/arrow.svg';
import { WithChildren } from '../../@types/utils';
import { createStyles } from './styles';

type HeaderProps = WithChildren<{
  title?: string;
  sourceImage?: string;
  headerArrowTestID:string;
  headerTitleTestID:string;
  headerImageTestID:string;
}>

export const Header = ({
  children,
  title,
  sourceImage,
  headerArrowTestID,
  headerTitleTestID,
  headerImageTestID,
}:HeaderProps) => {
  const Styles = useThemeAwareObject(createStyles);
  const navigation = useNavigation();

  const goBack = () => useCallback(() => { navigation.goBack(); }, [navigation]);

  return (
    <View style={Styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Arrow width={50} height={50} testID={headerArrowTestID} />
      </TouchableOpacity>

      <View testID={headerTitleTestID}>
        <Text style={Styles.title}>{title}</Text>
      </View>

      <Image testID={headerImageTestID} style={Styles.image} source={sourceImage || JordaoVictor} />
      {children}
    </View>
  );
};

Header.defaultProps = {
  headerTitleTestID: 'Header-Title',
  headerImageTestID: 'Header-Image',
  headerArrowTestID: 'Header-Arrow',
};
