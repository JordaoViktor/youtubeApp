import { User } from '@react-native-google-signin/google-signin';
import { rest } from 'msw';
import { mockUserInfo } from '@mocks/common';
import { ApiResponse } from '../../@types/utils';

const composeEndpoint = (endpoint: string) => `${BASE_URL}${endpoint}`;

export const handlers = [
  rest.get<undefined, ApiResponse<User>>(
    composeEndpoint('metrics'),
    (_req, res, ctx) => res(
      ctx.status(200),
      ctx.json({
        data: [{ mockUserInfo }],
      }),
    ),
  ),
];
