import { FC, PropsWithChildren } from 'react';
import * as S from './text.styles';
import { TextProps } from './text.types';
import { textHeaderAdapter } from './text-header.adapter';

export const Text: FC<PropsWithChildren<TextProps>> = ({ type, children }) => {
  const renderText = () => {
    switch (type) {
      case 'title':
        return <S.Title>{children}</S.Title>;
      case 'header':
        return (
          <S.Header dangerouslySetInnerHTML={{ __html: textHeaderAdapter(children as string) }} />
        );
      case 'param':
        return <S.Param>{children}</S.Param>;
      case 'info':
        return <S.Info>{children}</S.Info>;
      case 'text':
        return <S.Text>{children}</S.Text>;
      default:
        return <S.Text>{children}</S.Text>;
    }
  };
  return renderText();
};
