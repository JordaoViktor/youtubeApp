import { useUserInformation } from '@store/useUserInformation';
import axios from 'axios';
import { Platform } from 'react-native';

const YOUTUBE_DATA_API_KEY = Platform.OS === 'ios'
  ? 'AIzaSyDUImMueMAvfHXE6qTBkxQHK4aYnZOG_AQ'
  : 'AIzaSyDVj0yPK-EL-HobpFjwl2h_FcOuW0DwpV8';

const accessToken = useUserInformation.getState()?.userTokens?.accessToken;

type YoutubeDataAPIType = 'videos';

export const youtubeDataAPI = (resource: YoutubeDataAPIType) => axios.create({
  baseURL: `https://www.googleapis.com/youtube/v3/${resource}?myRating=like&part=snippet&key=${YOUTUBE_DATA_API_KEY}`,
  headers: {
    Authorization: `Bearer ${accessToken}`,
    Accept: 'application/json',
  },
  params: {
    filter: 'myRating, id, chart',
    part: 'snippet, contentDetails, player, recordingDetails, statistics, status, topicDetails',
    maxResults: 10,
  },
});
