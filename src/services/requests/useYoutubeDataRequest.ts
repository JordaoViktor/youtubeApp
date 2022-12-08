import { youtubeDataAPI } from '@services/apis/youtubeDataAPI';
import { useQuery } from '@tanstack/react-query';
import { YoutubeDTOType } from '../../store/useYoutubeData';
import { ApiResponse } from '../../@types/utils';

type YoutubeDataAPIType = 'videos';

export const useUsersQuery = (resource:YoutubeDataAPIType) => useQuery(
  ['youtubeData'],
  () => youtubeDataAPI(resource).get<ApiResponse<YoutubeDTOType[]>>(''), {
    select: ({ data }) => data.data,
  },
);
