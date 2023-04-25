import { ChangeEventHandler, FC, useCallback, useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import { useFormContext } from 'react-hook-form';
import { Iframe, Select, Skeleton, Text } from '@shared/ui';
import { ProductFormData } from '@widgets/forms/product-form/product-form.types';
import { youtubeApi } from '@features/youtube/api';

export const Video: FC = () => {
  const { setValue, watch } = useFormContext<ProductFormData>();
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [videos, setVideos] = useState<{ name: string; id: string }[]>([]);

  useEffect(() => {
    if (watch('video')) {
      youtubeApi
        .getVideo(watch('video'))
        .then(({ data }) =>
          setVideos(data.items.map((item) => ({ name: item.snippet.title, id: item.id })))
        );
    }
  }, []);

  const debounceSearch = useCallback(
    debounce((search: string) => {
      setIsLoading(true);
      youtubeApi
        .search(search)
        .then(({ data }) =>
          setVideos(data.items.map((item) => ({ name: item.snippet.title, id: item.id.videoId })))
        )
        .finally(() => setIsLoading(false));
    }, 1000),
    []
  );

  const onSearchChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const search = event.target.value;
    setSearch(search);
    search ? debounceSearch(search) : debounceSearch.cancel();
  };

  return (
    <>
      <Text type="param" textAlign="center">
        Видео
      </Text>
      <Select
        label="Видео"
        value={watch('video')}
        onSelect={(value) => setValue('video', value)}
        search={{ value: search, onChange: onSearchChange, isLoading }}
      >
        {videos.map(({ name, id }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </Select>
      {watch('video') && (
        <Skeleton height="270px">
          <Iframe
            width="480px"
            height="270px"
            src={`https://www.youtube.com/embed/${watch('video')}?controls=0`}
          />
        </Skeleton>
      )}
    </>
  );
};
