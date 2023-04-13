import { FC, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { cardService } from '../../../../../services/card';
import { Column, Row, Text } from '../../../../ui';
import { AddIcon, ArrowIcon } from '../../../../ui/icons';
import { useModal } from '../../../../../hooks';
import { Modal } from '../../../../templates/modal';
import { CardForm } from '../../forms/card-form';
import { cardToCardFormDataAdapter } from '../../adapters';
import * as S from './card-slider.styles';
import { CardItem } from '../card-item';

export const CardSlider: FC = observer(() => {
  const { isModalOpen, showModal, hideModal, selectedItemId } = useModal();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    cardService.getCards();
  }, []);

  const moveToPrev = () => setIndex(index - 1);
  const moveToNext = () => setIndex(index + 1);
  const onCardClick = (id: number, cardId?: number) =>
    index === id ? showModal(cardId) : index > id ? moveToPrev() : moveToNext();

  useEffect(() => {
    index && index === cardService.cards$.length && moveToPrev();
  }, [cardService.cards$.length]);

  return (
    <Column>
      <Text type="header" textAlign="center">
        Карты
      </Text>
      {!!cardService.cards$.length && (
        <Row alignItems="center">
          <ArrowIcon onClick={moveToPrev} visible={index !== 0} />
          <S.SliderView>
            <S.SliderContent left={-index * 165 + 170}>
              {cardService.cards$.map((card, id) => (
                <CardItem
                  key={card.id}
                  card={cardToCardFormDataAdapter(card)}
                  isActive={index === id}
                  onClick={() => onCardClick(id, card.id)}
                />
              ))}
            </S.SliderContent>
          </S.SliderView>
          <ArrowIcon
            position="right"
            onClick={moveToNext}
            visible={index !== cardService.cards$.length - 1}
          />
        </Row>
      )}
      <AddIcon onClick={showModal} />
      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <CardForm
          hideModal={hideModal}
          card={cardService.cards$.find((card) => card.id === selectedItemId)}
        />
      </Modal>
    </Column>
  );
});
