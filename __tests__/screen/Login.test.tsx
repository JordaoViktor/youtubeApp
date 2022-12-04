import React from 'react';
import {
  fireEvent, screen, waitFor,
} from '@testing-library/react-native';

import { Routes } from '@routes/index.routes';
import { useUserInformation } from '@store/useUserInformation';
import { GoogleSignin, User } from '@react-native-google-signin/google-signin';
import { server } from '@services/msw/server';
import { rest } from 'msw';
import { mockUserInfo } from '@mocks/common';
import { screenRender } from '../test-utils';

jest.setTimeout(20000);
describe('<LoginScreen />', () => {
  // jest.mock('react-native/Libraries/LogBox/LogBox');
  test('Login successfully', async () => {
    // jest.useFakeTimers();
    jest.useRealTimers();
    const component = (
      <Routes />
    );

    const { debug } = screenRender(component);

    const signInButton = await screen.findByTestId('ButtonTestID');
    fireEvent.press(signInButton);
    // console.log(userInfo);
    // await waitFor(async () => {
    //   const { userInfo } = useUserInformation.getState();
    //   console.log('hello', userInfo);

    //   await debug();
    // });
    server.use(rest.get('*', (req, res) => res.once(() => ({
      body: {
        data: mockUserInfo,
      },
    }))));
    // const mockUserInfo: User = {
    //   idToken: 'mockIdToken',
    //   serverAuthCode: 'mockServerAuthCode',
    //   scopes: [],
    //   user: {
    //     email: 'mockEmail',
    //     id: 'mockId',
    //     givenName: 'mockGivenName',
    //     familyName: 'mockFamilyName',
    //     photo: null,
    //     name: 'mockFullName',
    //   },
    // };
    expect(await GoogleSignin.signIn()).toStrictEqual(mockUserInfo);
    await waitFor(async () => {
      // jest.fn().mockResolvedValue(mockUserInfo);
      // const userInfo = useUserInformation.getState()?.userInfo;
      // const data = await screen.findByText('My videos');
      // expect(data).toBeTruthy();
      // expect(signInButton).toBeFalsy();
      // console.log(userInfo);
      await debug();
    }, { timeout: 8000 });
  });
});
