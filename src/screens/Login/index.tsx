import React, { useCallback, useEffect } from 'react';
import {
  Text, View,
} from 'react-native';
import {
  GoogleSignin,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useUserInformation } from '@store/useUserInformation';
import { useThemeAwareObject } from '@hooks/style/useThemeAwareObject';

import { Button } from '@components/Button';
import YoutubeLogo from '@assets/svg/YouTube-Logo.svg';

import { createStyles } from './styles';

import { RootStackParamListType } from '../../@types/navigation';

type LoginRouteType = StackNavigationProp<
RootStackParamListType,
'Home'
>;

const handleSignIn = async () => {
  const googleUserInfo = await GoogleSignin.signIn();
  const googleUserTokens = await GoogleSignin.getTokens();

  const googleCredential = auth.GoogleAuthProvider.credential(googleUserInfo?.idToken);
  auth().signInWithCredential(googleCredential);

  useUserInformation.setState({
    userInfo: googleUserInfo,
    userTokens: googleUserTokens,
  });
  console.log('haha', googleUserInfo);
  return googleUserInfo;
};

export const LoginScreen = () => {
  const Styles = useThemeAwareObject(createStyles);
  const navigate = useNavigation<LoginRouteType>();

  const userInfo = useUserInformation(
    (state) => state.userInfo,
  );
  const userTokens = useUserInformation(
    (state) => state.userTokens,
  );
  console.log(userTokens);
  const onSigned = useCallback(() => {
    if (userInfo?.idToken) {
      navigate.navigate('Home');
    }
  }, [userInfo?.idToken, userInfo]);

  useEffect(() => {
    onSigned();
  }, [onSigned]);
  // console.log(userInfo);
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
