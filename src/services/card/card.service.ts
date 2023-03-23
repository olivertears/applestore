import { action, makeObservable, observable } from 'mobx';
import { ICard } from '../../interfaces';
import { ICardService } from './card.types';
import { MOCKED_CARDS } from './card.mocked';

class CardService implements ICardService {
  cards$: ICard[] = MOCKED_CARDS;

  constructor() {
    makeObservable(this, {
      cards$: observable,
      setCards: action
    });
  }

  setCards(cards: ICard[]) {
    this.cards$ = cards;
  }
}

export const cardService = new CardService();
