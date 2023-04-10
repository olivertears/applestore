import { action, makeObservable, observable } from 'mobx';
import { cardApi } from '../../api/card';
import { ICard } from '../../interfaces';
import { ICardService } from './card.types';

class CardService implements ICardService {
  cards$: ICard[] = [];

  constructor() {
    makeObservable(this, {
      cards$: observable,
      setCards: action
    });
  }

  setCards(cards: ICard[]) {
    this.cards$ = cards;
  }

  async addCard(addCardData: Omit<ICard, 'id' | 'status'>) {
    const { data } = await cardApi.addCard(addCardData);
    this.setCards([...this.cards$, data]);
  }

  async deleteCard(id: number) {
    await cardApi.deleteCard(id);
    this.setCards(this.cards$.filter((card) => card.id !== id));
  }

  async getCards() {
    const { data } = await cardApi.getCards();
    this.setCards(data);
  }

  async updateCard(updateCardData: Omit<ICard, 'status'>) {
    const { data } = await cardApi.updateCard(updateCardData);
    this.setCards(this.cards$.map((card) => (card.id === updateCardData.id ? data : card)));
  }

  async setActive(id: number) {
    const { data } = await cardApi.setActive(id);
    this.setCards(data);
  }
}

export const cardService = new CardService();
