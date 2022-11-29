import React from 'react';
import {
  StyleProp,
  Text, TouchableOpacity, ViewStyle,
} from 'react-native';
import { useThemeAwareObject } from '@hooks/style/useThemeAwareObject';
import { WithChildren } from '../../@types/utils';

import { createStyles } from './styles';

type ButtonProps = WithChildren<{
  active?:boolean;
  pressableTestID?: string;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<ViewStyle>;
  text?:string;
}>

export const Button = ({
  children, active, pressableTestID, onPress, buttonStyle, textStyle, text,
}:ButtonProps) => {
  const Styles = useThemeAwareObject(createStyles);

  return (
    <TouchableOpacity
      style={[Styles.container, buttonStyle]}
      testID={pressableTestID}
      disabled={!active}
      onPress={onPress}
    >
      <Text style={[Styles.title, textStyle]}>{text}</Text>
      {children}
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  active: true,
  pressableTestID: 'ButtonTestID',
};
