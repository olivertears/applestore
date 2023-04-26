import { FC } from 'react';

import { Photo } from '@features/photo';
import { previewService } from './service';
import { PreviewProps } from './preview.types';

export const Preview: FC<PreviewProps> = ({ preview, productId }) => {
  return (
    <Photo
      photo={'products/photo/preview/' + productId + '/' + preview}
      addPhoto={(file: File) => previewService.addPreview(file, productId)}
      deletePhoto={() => previewService.deletePreview(preview, productId)}
    />
  );
};
