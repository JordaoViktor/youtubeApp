import { useUserInformation } from '@store/useUserInformation';
import axios from 'axios';
import { Platform } from 'react-native';

export const CLIENT_ID = Platform.OS === 'ios'
  ? '1059106940193-7sc4s86ksmtkkvvhu7m089dbk7cdfdvf.apps.googleusercontent.com'
  : '1059106940193-jojmkdlvpppido0nt52od75j9r78c018.apps.googleusercontent.com';

const accessToken = useUserInformation.getState()?.userTokens?.accessToken;

export const youtubeAnalyticsAPI = axios.create({
  baseURL: 'https://youtubeanalytics.googleapis.com/v2/groups?dimensions=video&metrics=views,estimatedMinutesWatched,likes,dislikes,averageViewPercentage,averageViewDuration&sort=-views&maxResults=200&ids=channel==MINE&startDate=2020-01-01&endDate=2021-12-31&filters=video==fbY6r12Kyyo,n84bsqaer-g,ik2uk5pHyEA,XxYv3LIJtmo',
  headers: {
    Authorization: `Bearer ${accessToken}`,
    Accept: 'application/json',
  },
});
