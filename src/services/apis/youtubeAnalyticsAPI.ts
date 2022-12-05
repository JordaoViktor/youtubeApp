import { useUserInformation } from '@store/useUserInformation';
import axios from 'axios';

const accessToken = useUserInformation.getState()?.userTokens?.accessToken;

export const youtubeAnalyticsAPI = axios.create({
  baseURL: 'https://youtubeanalytics.googleapis.com/v2/groups?dimensions=video&metrics=views,estimatedMinutesWatched,likes,dislikes,averageViewPercentage,averageViewDuration&sort=-views&maxResults=200&ids=channel==MINE&startDate=2020-01-01&endDate=2021-12-31&filters=video==fbY6r12Kyyo,n84bsqaer-g,ik2uk5pHyEA,XxYv3LIJtmo',
  headers: {
    Authorization: `Bearer ${accessToken}`,
    Accept: 'application/json',
  },
});
