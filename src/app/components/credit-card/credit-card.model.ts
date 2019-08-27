import { CreditCardFlagEnum } from './credit-card-flag.enum';

export class CreditCardModel {
  ammount: number;
  cvv: string;
  expiryMonth: string;
  flagCard: CreditCardFlagEnum;
  holderName: number;
  installments: number;
  number: string;
}
