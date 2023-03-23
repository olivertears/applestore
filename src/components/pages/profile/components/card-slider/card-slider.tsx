import { FC, useState } from 'react';
import { cardService } from '../../../../../services/card';
import { Column, Row, Title } from '../../../../ui';
import { ArrowIcon } from '../../../../ui/icons';
import { useModal } from '../../../../../hooks';
import { Modal } from '../../../../templates/modal';
import { CardForm } from '../../forms/card-form';
import { cardToCardFormValuesAdapter } from '../../adapters';
import * as S from './card-slider.styles';
import { CardItem } from '../card-item';

export const CardSlider: FC = () => {
  const { isModalOpen, showModal, hideModal, selectedItemId } = useModal();
  const [index, setIndex] = useState(0);

  const moveToPrev = () => index >= 0 && setIndex(index - 1);
  const moveToNext = () => index < cardService.cards$.length && setIndex(index + 1);
  const onCardClick = (id: number, cardId?: string) =>
    index === id ? showModal(cardId) : index > id ? moveToPrev() : moveToNext();

  return (
    <Column>
      <Title>Карты</Title>
      <Row>
        <ArrowIcon onClick={moveToPrev} />
        <S.SliderView>
          <S.SliderContent left={-index * 165 + 5}>
            <CardItem
              isActive={index === -1}
              onClick={() => onCardClick(-1)}
              card={cardToCardFormValuesAdapter()}
            />
            {cardService.cards$.map((card, id) => (
              <CardItem
                key={card.id}
                card={cardToCardFormValuesAdapter(card)}
                isActive={index === id}
                onClick={() => onCardClick(id, card.id)}
              />
            ))}
            <CardItem
              isActive={index === cardService.cards$.length}
              onClick={() => onCardClick(cardService.cards$.length)}
              card={cardToCardFormValuesAdapter()}
            />
          </S.SliderContent>
        </S.SliderView>
        <ArrowIcon Svg={S.ArrowRight} onClick={moveToNext} />
      </Row>
      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <CardForm card={cardService.cards$.find((card) => card.id === selectedItemId)} />
      </Modal>
    </Column>
  );
};
