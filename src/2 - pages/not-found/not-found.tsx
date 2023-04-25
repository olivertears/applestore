import { FC } from 'react';
import { RouteNames } from '@app/router';
import { PageWrap, Row, Text } from '@shared/ui';
import { AppleIcon } from '@shared/icons';
import * as S from './not-found.styles';
import { useNavigate } from 'react-router-dom';

const NotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <PageWrap>
      <Row justifyContent="center" gap="0">
        <S.Text>4</S.Text>
        <AppleIcon width="200px" onClick={() => navigate(RouteNames.STORE)} />
        <S.Text>4</S.Text>
      </Row>
      <Text type="title" textAlign="center">
        Page Not Found
      </Text>
    </PageWrap>
  );
};

export default NotFound;
