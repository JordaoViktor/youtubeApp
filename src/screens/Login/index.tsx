import React from 'react';
import {
  Text, View,
} from 'react-native';

import { useThemeAwareObject } from '@hooks/style/useThemeAwareObject';

import { Button } from '@components/Button';
import YoutubeLogo from '@assets/svg/YouTube-Logo.svg';

import useAuthentication from '@hooks/auth/useAuthentication';

import { createStyles } from './styles';

export const LoginScreen = () => {
  const Styles = useThemeAwareObject(createStyles);

  const { handleSignIn } = useAuthentication();

  return (
    <View
      style={Styles.container}
    >
      <Text style={Styles.mainTitle}>Login</Text>
      <YoutubeLogo width={200} height={200} />
      <View style={Styles.signinWrapper}>
        <Button
          text="Sign in"
          onPress={handleSignIn}
        />
      </View>
    </View>
  );
};
