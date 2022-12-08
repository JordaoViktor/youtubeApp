import create from 'zustand';
import { persist } from 'zustand/middleware';

export type YoutubeDTOItem = {
  kind: string,
  etag: string,
  id: string,
  snippet: {
    publishedAt: string,
    channelId: string,
    title: string,
    description: string,
    thumbnails: {
      [key: string]: {
        url: string,
        width: number,
        height: number
      }
    },
    channelTitle: string,
    tags: [
      string
    ],
    categoryId: string
  },
  statistics: {
    viewCount: number;
    likeCount:number;
    favoriteCount:number;
    commentCount:number
  },
  player:{
    embedHtml:string
  },
  topicDetails:{
    topicCategory:[string]
  },
  status:{
    uploadStatus:string;
    privacyStatus:string;
    license:string;
    embeddable:boolean
    publicStatsViewable:boolean
    madeForKids:boolean
  },
  contentDetails:{
    duration:string;
    dimension:string;
    definition:string;
    caption:boolean;
    licensedContent:boolean;
    contentRating:{};
    projection:string;
  },
  recordingDetails:{}

}

export type YoutubeDTOType = {
  kind: string,
  etag: string,
  id: string,
  items: YoutubeDTOItem[],
  nextPageToken: string;
  pageInfo:{
    totalResults: number;
    resultsPerPage: string;
  },

}

interface IUseYoutubeDataProps {
  youtubeData: YoutubeDTOType
}

export const useYoutubeData = create(persist(() => ({
  youtubeData: {},
} as IUseYoutubeDataProps), {
  name: 'useYoutubeData',
}));
