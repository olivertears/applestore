import { FC, useState } from 'react';
import { cardService } from '../../../../../services/card';
import { Column, Row, Text } from '../../../../ui';
import { AddIcon, ArrowIcon } from '../../../../ui/icons';
import { useModal } from '../../../../../hooks';
import { Modal } from '../../../../templates/modal';
import { CardForm } from '../../forms/card-form';
import { cardToCardFormValuesAdapter } from '../../adapters';
import * as S from './card-slider.styles';
import { CardItem } from '../card-item';

export const CardSlider: FC = () => {
  const { isModalOpen, showModal, hideModal, selectedItemId } = useModal();
  const [index, setIndex] = useState(0);

  const moveToPrev = () => index > 0 && setIndex(index - 1);
  const moveToNext = () => index < cardService.cards$.length - 1 && setIndex(index + 1);
  const onCardClick = (id: number, cardId?: string) =>
    index === id ? showModal(cardId) : index > id ? moveToPrev() : moveToNext();

  return (
    <Column>
      <Text type="header">Карты</Text>
      <Row>
        <ArrowIcon onClick={moveToPrev} />
        <S.SliderView>
          <S.SliderContent left={-index * 165 + 170}>
            {cardService.cards$.map((card, id) => (
              <CardItem
                key={card.id}
                card={cardToCardFormValuesAdapter(card)}
                isActive={index === id}
                onClick={() => onCardClick(id, card.id)}
              />
            ))}
          </S.SliderContent>
        </S.SliderView>
        <ArrowIcon right={0} rotate={180} onClick={moveToNext} />
      </Row>
      <AddIcon onClick={showModal} />
      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <CardForm card={cardService.cards$.find((card) => card.id === selectedItemId)} />
      </Modal>
    </Column>
  );
};
