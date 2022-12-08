import { useUserInformation } from '@store/useUserInformation';
// import { useYoutubeData } from '@store/useYoutubeData';
import axios from 'axios';

const accessToken = useUserInformation.getState()?.userTokens?.accessToken;

export const youtubeAnalyticsAPI = axios.create({
  baseURL: 'https://youtubeanalytics.googleapis.com/v2/',
  headers: {
    Authorization: `Bearer ${accessToken}`,
    Accept: 'application/json',
  },
});
