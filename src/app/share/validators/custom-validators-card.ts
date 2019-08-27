import { FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { CreditCardFlagEnum } from './../../components/credit-card/credit-card-flag.enum';

export function validateCard(cardType: CreditCardFlagEnum): ValidatorFn {

  return (control: FormControl): ValidationErrors => {

    if (control.value) {
      let cardNumber = control.value.replace(/_|-|\./g, '').trim();
      const errorInvalidCard = { invalid_card: true };


      if (cardNumber.length === 16) {

        const number: Array<number> = new Array();

        for (let i = 0, iLen = cardNumber.length; i < iLen; i++) {
          number.push(parseInt(cardNumber[i]));
        }

        switch (cardType) {
          case CreditCardFlagEnum.Mastercard:
            if (number.length !== 16) {
              return { invalid_card: true }
            }
            if (number[0] !== 5 || number[1] === 0 || number[1] > 5) {
              return { invalid_card: true };
            }
            break;

          case CreditCardFlagEnum.Visa:
            if (number.length !== 16 && number.length !== 13) {
              return { invalid_card: true };
            }
            if (number[0] !== 4) {
              return { invalid_card: true };
            }
            break;



          case CreditCardFlagEnum.Hipercard:
            if (number.length !== 16) {
              return { invalid_card: true };
            }
            if (((number[0] !== 3 && (number[1] !== 8))
              && (number[0] !== 6 && number[1] !== 0 && number[2] !== 6 && number[3] !== 2 && number[4] !== 8 && number[5] !== 2))
              || (!cardNumber.startsWith('606282'))) {
              return { invalid_card: true };
            }
            break;

          case CreditCardFlagEnum.Elo:
            if (number.length !== 16) {
              return { invalid_card: true };
            }

            const regex = /^(636368|438935|504175|451416|509048|509067|509049|509069|509050|509074|509068|509040|509045|509051|509046|509066|509047|509042|509052|509043|509064|509040|36297|5067|5066|4576|4011)\d+$/g;
            if (!cardNumber.match(regex)) {
              return { invalid_card: true };
            }

            break;
          default:
            return { invalid_card: true };
        }

        var sum: number = 0;
        var resto: number = 0;
        var len: number = number.length;
        var peso: Array<number> = new Array(2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2);
        var dig: string = number[len - 1].toString();
        var numberTratado: any = [''];

        number.splice(-1);

        cardNumber = number.reverse();

        for (var i = 0; i < cardNumber.length; i++) {
          numberTratado += number[i].toString();
        }

        for (var i = 0; i < numberTratado.length; i++) {
          var total = numberTratado[i] * peso[i];

          if (total > 9) {
            sum += parseInt(total.toString().split("")[0]) + parseInt(total.toString().split("")[1]);
          } else {
            sum += total;
          }
        }

        resto = sum % 10;


        if (resto == 0) {
          return (dig == "0") ? null : errorInvalidCard;
        } else {
          return (dig == (10 - resto).toString()) ? null : errorInvalidCard;
        }


      } else {
        return { invalid_length_card: true };
      }
    }
  }
}
