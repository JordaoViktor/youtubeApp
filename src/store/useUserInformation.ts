import { User } from '@react-native-google-signin/google-signin';
import create from 'zustand';
import { persist } from 'zustand/middleware';

interface UseUserInformationProps {
  userInfo: User;
  userTokens: UserTokensType
}

export type UserTokensType = {
  idToken: string;
  accessToken: string;
}

export const useUserInformation = create(persist(() => ({
  userInfo: {},
  userTokens: {},
}as UseUserInformationProps), {
  name: 'useUserInformation',
}));
