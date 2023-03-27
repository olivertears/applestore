import { action, makeObservable, observable } from 'mobx';
import { Catch } from '../../utils';
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

  @Catch
  async addCard(addCardData: ICard) {
    const newCard = await cardApi.addCard(addCardData);
    this.setCards([...this.cards$, newCard.data]);
  }

  @Catch
  async deleteCard(id: string) {
    await cardApi.deleteCard(id);
    this.setCards(this.cards$.filter((card) => card.id !== id));
  }

  @Catch
  async getCards() {
    const cards = await cardApi.getCards();
    this.setCards(cards.data);
  }

  @Catch
  async updateCard(updateCardData: ICard) {
    const updatedCard = await cardApi.updateCard(updateCardData);
    this.setCards(
      this.cards$.map((card) => (card.id === updateCardData.id ? updatedCard.data : card))
    );
  }
}

export const cardService = new CardService();
