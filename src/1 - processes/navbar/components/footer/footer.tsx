import { FC, Fragment } from 'react';
import { Divider, Text } from '@shared/ui';
import * as S from './footer.styles';
import { APPLE_LINKS, TEXT_INFO } from './footer.constants';

export const Footer: FC = () => {
  return (
    <S.Footer>
      {TEXT_INFO.map((text) => (
        <Text key={text} padding="0 20px">
          {text}
        </Text>
      ))}
      <Divider margin="0 20px" />
      <S.FooterBottomLine>
        <Text>Copyright © 2023 Apple Inc. All rights reserved.</Text>
        <S.LinkWrap>
          {APPLE_LINKS.map(({ link, text }, index) => (
            <Fragment key={link}>
              {index !== 0 && <Divider margin="0" vertical />}
              <S.StyledLink to={link} target="_blank">
                {text}
              </S.StyledLink>
            </Fragment>
          ))}
        </S.LinkWrap>
        <Text>United States</Text>
      </S.FooterBottomLine>
    </S.Footer>
  );
};
