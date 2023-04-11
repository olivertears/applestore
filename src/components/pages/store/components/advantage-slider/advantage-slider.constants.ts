import { AppleStoreIcon, CardIcon, CarIcon, SmileIcon, TradeIcon } from '../../../../ui/icons';
import { StoreAdvantage } from './advantage-slider.types';

export const STORE_ADVANTAGE_CARDS: StoreAdvantage[] = [
  {
    text: 'Enjoy two-hour delivery from an Apple Store, free delivery, or easy pickup.',
    Icon: CarIcon
  },
  {
    text: 'Trade in your current device. Get credit toward a new one.',
    Icon: TradeIcon
  },
  {
    text: 'Pay in full or pay over time. Your choice.',
    Icon: CardIcon
  },
  {
    text: 'Get a personalized shopping experience in the Apple Store app.',
    Icon: AppleStoreIcon
  },
  {
    text: 'Make them yours. Engrave a mix of emoji, names, and numbers for free.',
    Icon: SmileIcon
  }
];
