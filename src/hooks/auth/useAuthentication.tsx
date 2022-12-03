import { useCallback, useEffect } from 'react';
import { Platform } from 'react-native';

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamListType } from '../../@types/navigation';

type RouteListType = 'Login' | 'Home'

type useAuthenticationRouteType = StackNavigationProp<
  RootStackParamListType,
  RouteListType
>;

interface UseAuthenticationProps {
  routeRedirect:RouteListType;
}

const { CLIENT_ID_IOS, CLIENT_ID_ANDROID } = process.env;
const PlatformVerification = Platform.OS === 'ios' ? CLIENT_ID_IOS : CLIENT_ID_ANDROID;
const signInSuccessful = statusCodes.SIGN_IN_REQUIRED === '200';

const useAuthentication = ({ routeRedirect }: UseAuthenticationProps) => {
  const navigation = useNavigation<useAuthenticationRouteType>();

  const handleSignIn = useCallback(async () => {
    const userInfo = await GoogleSignin.signIn();
    console.log(userInfo);

    if (signInSuccessful) {
      navigation.navigate(routeRedirect);
    }
  }, []);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: PlatformVerification,
    });
  }, []);

  return {
    handleSignIn,
    statusCodes,
  };
};

useAuthentication.defaultProps = {
  routeRedirect: 'Home',
};

export default useAuthentication;
