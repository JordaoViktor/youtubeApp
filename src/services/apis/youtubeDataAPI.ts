import { useUserInformation } from '@store/useUserInformation';
import axios from 'axios';
import { Platform } from 'react-native';

export const CLIENT_ID = Platform.OS === 'ios'
  ? '1059106940193-7sc4s86ksmtkkvvhu7m089dbk7cdfdvf.apps.googleusercontent.com'
  : '1059106940193-jojmkdlvpppido0nt52od75j9r78c018.apps.googleusercontent.com';

const YOUTUBE_DATA_API_KEY = 'AIzaSyDUImMueMAvfHXE6qTBkxQHK4aYnZOG_AQ';

// AIzaSyCk4F6ADsrpKZAsFCobaLm-ChD88E2BRxY
const accessToken = useUserInformation.getState()?.userTokens?.accessToken;

export const youtubeDataAPI = axios.create({
  baseURL: `https://www.googleapis.com/youtube/v3/videos?myRating=like&part=snippet&key=${YOUTUBE_DATA_API_KEY}`,
  headers: {
    Authorization: `Bearer ${accessToken}`,
    Accept: 'application/json',
  },
  params: {
    filter: 'myRating, id, chart',
  },
});
