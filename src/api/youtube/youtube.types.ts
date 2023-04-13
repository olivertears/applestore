import { AxiosResponse } from 'axios';

export interface IYoutubeApi {
  search: (search: string) => Promise<AxiosResponse<{ items: SearchResponseItem[] }>>;
  getVideo: (id?: string) => Promise<AxiosResponse<{ items: VideoResponseItem[] }>>;
}

export type SearchResponseItem = {
  snippet: { title: string };
  id: { videoId: string };
};

export type VideoResponseItem = {
  snippet: { title: string };
  id: string;
};
