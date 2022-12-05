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
      (key: string): {
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
  }
}

interface IUseYoutubeDataProps {
  youtubeData: YoutubeDTOType
}

export const useYoutubeData = create(persist(() => ({
  youtubeData: {},
} as IUseYoutubeDataProps), {
  name: 'useYoutubeData',
}));
