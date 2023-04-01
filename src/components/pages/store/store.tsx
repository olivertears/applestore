import { FC } from 'react';
import { PageWrap } from '../../ui';
import { UnitSlider } from './components/unit-slider';
import { AdvantageSlider } from './components/advantage-slider';

export const Store: FC = () => {
  return (
    <PageWrap>
      <UnitSlider />
      <AdvantageSlider />
    </PageWrap>
  );
};
