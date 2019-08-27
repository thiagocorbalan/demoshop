import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateCard } from 'src/app/share/validators/custom-validators-card';
import { CreditCardFlagRegex } from '../credit-card/credit-card-flag-regex';
import { CreditCardFlagEnum } from '../credit-card/credit-card-flag.enum';
import { CardFlagModel } from '../credit-card/credit-card-flag.model';
import { PaymentPriceModel } from './payment-price.model';
import { PaymentService } from './payment.service';
import { MatSelectChange } from '@angular/material/select';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  creditFg: FormGroup;
  installmentOptions: Array<number>;
  cardIsFlipped: boolean;
  cardNumberActive: CreditCardFlagEnum;
  classSkinCard: string;
  cardFlags: Array<CardFlagModel>;
  spinner: boolean;

  constructor(
    private fb: FormBuilder,
    private paymentService: PaymentService) {

    this.installmentOptions = new Array();
    this.cardFlags = new Array();
  }

  ngOnInit() {
    this.createForm();
    this.creditFg.controls.installmentOpt.disable();
    this.loadInstallmentsOptions();
    this.loadCardFlags();
  }

  private createForm() {
    this.creditFg = this.fb.group({
      number: [null, [Validators.required, validateCard(this.cardNumberActive)]],
      cvv: [null, Validators.required],
      holderName: [null, Validators.required],
      expiryMonth: [null, Validators.required],
      installmentOpt: [null, Validators.required],
      flagCard: null
    });
  }
  private loadCardFlags() {
    this.paymentService.getCardFlags().subscribe((flags: Array<CardFlagModel>) => {
      this.cardFlags = flags;
    });
  }

  private loadInstallmentsOptions() {
    this.paymentService.getPrices().subscribe((data: PaymentPriceModel) => {
      let i = 1;
      while (i <= data.maxInstallments) {
        const price = data.price / i;
        this.installmentOptions.push(price);
        i++;
      }
      this.creditFg.controls.installmentOpt.enable();
    });
  }

  toggleFlipCard() {
    this.cardIsFlipped = !this.cardIsFlipped;
  }

  discoveringCardBanner(e?: Event): void {
    e.stopPropagation();
    let cardCode: number = null;

    const numberCard = this.creditFg.controls.number.value;

    if (numberCard != null && numberCard.length > 6) {
      const num: string = numberCard.replace(/(_|-|\.)+/g, '').trim();

      // Visa
      if (this.cardFlags.find(x => x.code === CreditCardFlagEnum.Visa) != null && num.match(CreditCardFlagRegex.visa)) {
        cardCode = CreditCardFlagEnum.Visa;
      }

      // Mastercard
      if (this.cardFlags.find(x => x.code === CreditCardFlagEnum.Mastercard) != null && num.match(CreditCardFlagRegex.mastercard)) {
        cardCode = CreditCardFlagEnum.Mastercard;
      }

      // Hipercard
      if (this.cardFlags.find(x => x.code === CreditCardFlagEnum.Hipercard) != null && num.match(CreditCardFlagRegex.hipercard
      )) {
        cardCode = CreditCardFlagEnum.Hipercard;
      }

      // Elo
      if (this.cardFlags.find(x => x.code === CreditCardFlagEnum.Elo) != null && num.match(CreditCardFlagRegex.elo)) {
        cardCode = CreditCardFlagEnum.Elo;
      }

      this.creditFg.controls.number.markAsUntouched();
      this.creditFg.controls.number.setValidators([Validators.required, validateCard(cardCode)]);
    } else if (this.creditFg.controls.number.value === '') {
      cardCode = null;
    }
    this.cardNumberActive = cardCode;
    this.classSkinCard = cardCode ? `skin-card--${cardCode}` : null;
    this.creditFg.controls.flagCard.setValue(cardCode);

  }

  makePayment() {
    if (this.creditFg.valid) {
      this.spinner = true;
      const data = this.creditFg.value;
      this.paymentService.effectPayment(data).subscribe(result => {
        console.log(result);
        this.spinner = false;
      });
    }
  }
}
