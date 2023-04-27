import axios, { AxiosResponse } from 'axios';
import { IYoutubeApi } from './youtube.types';
import { SearchResponseItem, VideoResponseItem } from '../types';

class YoutubeApi implements IYoutubeApi {
  search(search: string): Promise<AxiosResponse<{ items: SearchResponseItem[] }>> {
    return axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?q=${search}&part=snippet&type=video&videoDuration=short&maxResults=10&key=${
        import.meta.env.VITE_KEY
      }`
    );
  }

  getVideo(id?: string): Promise<AxiosResponse<{ items: VideoResponseItem[] }>> {
    return axios.get(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${
        import.meta.env.VITE_KEY
      }`
    );
  }
}

export const youtubeApi = new YoutubeApi();
