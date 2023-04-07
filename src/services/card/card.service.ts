import { action, makeObservable, observable } from 'mobx';
import { cardApi } from '../../api/card';
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

  async addCard(addCardData: ICard) {
    const { data } = await cardApi.addCard(addCardData);
    this.setCards([...this.cards$, data]);
  }

  async deleteCard(id: string) {
    await cardApi.deleteCard(id);
    this.setCards(this.cards$.filter((card) => card.id !== id));
  }

  async getCards() {
    const { data } = await cardApi.getCards();
    this.setCards(data);
  }

  async updateCard(updateCardData: ICard) {
    const { data } = await cardApi.updateCard(updateCardData);
    this.setCards(this.cards$.map((card) => (card.id === updateCardData.id ? data : card)));
  }
}

export const cardService = new CardService();
