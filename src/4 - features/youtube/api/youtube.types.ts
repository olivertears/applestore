import { AxiosResponse } from 'axios';
import { SearchResponseItem, VideoResponseItem } from '../types';

export interface IYoutubeApi {
  search: (search: string) => Promise<AxiosResponse<{ items: SearchResponseItem[] }>>;
  getVideo: (id?: string) => Promise<AxiosResponse<{ items: VideoResponseItem[] }>>;
}
