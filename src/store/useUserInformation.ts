import { User } from '@react-native-google-signin/google-signin';
import create from 'zustand';
import { persist } from 'zustand/middleware';

interface UseUserInformationProps {
  userInfo: User;
}

export const useUserInformation = create(persist(() => ({
  userInfo: {},
}as UseUserInformationProps), {
  name: 'useUserInformation',
}));
