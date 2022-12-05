import { useUserInformation } from '@store/useUserInformation';
import axios from 'axios';
import { Platform } from 'react-native';

const YOUTUBE_DATA_API_KEY = Platform.OS === 'ios'
  ? 'AIzaSyDUImMueMAvfHXE6qTBkxQHK4aYnZOG_AQ'
  : 'AIzaSyDVj0yPK-EL-HobpFjwl2h_FcOuW0DwpV8';

const accessToken = useUserInformation.getState()?.userTokens?.accessToken;

export const youtubeDataAPI = axios.create({
  baseURL: `https://www.googleapis.com/youtube/v3/videos?myRating=like&part=snippet&key=${YOUTUBE_DATA_API_KEY}`,
  headers: {
    Authorization: `Bearer ${accessToken}`,
    Accept: 'application/json',
  },
  params: {
    filter: 'myRating, id, chart',
    maxResults: 10,
  },
});
