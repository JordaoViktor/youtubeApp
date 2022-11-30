import { QueryClientProvider } from '@tanstack/react-query';
import { WithChildren } from '../../@types/utils';
import queryClient from './queryClient';

type ReactQueryProviderProps = WithChildren<{

}>

const ReactQueryProvider = ({ children }:ReactQueryProviderProps) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);

export default ReactQueryProvider;
