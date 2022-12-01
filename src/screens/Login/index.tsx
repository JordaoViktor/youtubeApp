import React, { useEffect } from 'react';
import {
  Platform,
  Text, View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { StackNavigationProp } from '@react-navigation/stack';

import { useThemeAwareObject } from '@hooks/style/useThemeAwareObject';

import { Button } from '@components/Button';
import YoutubeLogo from '@assets/svg/YouTube-Logo.svg';

import { createStyles } from './styles';
import { RootStackParamListType } from '../../@types/navigation';

type DetailsScreenProps = StackNavigationProp<
  RootStackParamListType,
  'Home'
>;
const { CLIENT_ID_IOS, CLIENT_ID_ANDROID } = process.env;

const PlatformVerification = Platform.OS === 'ios' ? CLIENT_ID_IOS : CLIENT_ID_ANDROID;

export const LoginScreen = () => {
  const navigation = useNavigation<DetailsScreenProps>();
  const Styles = useThemeAwareObject(createStyles);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: PlatformVerification,
    });
  }, []);

  const handleSignIn = async () => {
    const userInfo = await GoogleSignin.signIn();
    console.log(userInfo);
  };

  return (
    <View
      style={Styles.container}
    >
      <Text style={Styles.mainTitle}>Login</Text>
      <YoutubeLogo width={200} height={200} />
      <View style={Styles.signinWrapper}>
        <Button
          text="Sign in"
          onPress={() => { handleSignIn(); }}
        />
      </View>
    </View>
  );
};
