import { FC, PropsWithChildren } from 'react';
import * as S from './text.styles';
import { TextProps } from './text.types';

export const Text: FC<PropsWithChildren<TextProps>> = ({
  type,
  margin,
  padding,
  textAlign,
  children
}) => {
  const renderText = () => {
    switch (type) {
      case 'title':
        return (
          <S.Title margin={margin} padding={padding} textAlign={textAlign}>
            {children}
          </S.Title>
        );
      case 'header':
        return (
          <S.Header margin={margin} padding={padding} textAlign={textAlign}>
            {children}
          </S.Header>
        );
      case 'param':
        return (
          <S.Param margin={margin} padding={padding} textAlign={textAlign}>
            {children}
          </S.Param>
        );
      case 'info':
        return (
          <S.Info margin={margin} padding={padding} textAlign={textAlign}>
            {children}
          </S.Info>
        );
      default:
        return (
          <S.Text margin={margin} padding={padding} textAlign={textAlign}>
            {children}
          </S.Text>
        );
    }
  };
  return renderText();
};
