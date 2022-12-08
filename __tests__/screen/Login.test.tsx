import React from 'react';
import {
  fireEvent, screen, waitFor,
} from '@testing-library/react-native';

import { Routes } from '@routes/index.routes';
// import { useUserInformation } from '@store/useUserInformation';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { server } from '@services/msw/server';
import { rest } from 'msw';
import { mockUserInfo } from '@mocks/common';
import { screenRender } from '../test-utils';

// jest.setTimeout(20000);

describe('<LoginScreen />', () => {
  test('Login successfully', async () => {
    // jest.useFakeTimers();
    jest.useRealTimers();
    const component = (
      <Routes />
    );
    screenRender(component);

    const signInButton = screen.getByTestId('ButtonTestID');
    fireEvent.press(signInButton);

    // server.use(rest.get('*', (req, res, ctx) => res(ctx.status(200), ctx.json({
    //   data: [
    //     mockUserInfo,
    //   ],
    // }))));
    // await waitFor(() => jest.spyOn(GoogleSignin, 'signIn'));

    expect(await GoogleSignin.signIn()).toStrictEqual(mockUserInfo);
  });
});
