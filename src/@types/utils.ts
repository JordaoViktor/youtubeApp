import { ReactNode } from 'react';

export type WithChildren<T = {}> =
T & { children?: ReactNode };

export type ApiResponse<T> = {
  data: T;
};
