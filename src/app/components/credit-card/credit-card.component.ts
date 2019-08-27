import { CreditCardFlagEnum } from './credit-card-flag.enum';
import { CreditCardModel } from './credit-card.model';
import { Component, OnInit, Input } from '@angular/core';
import { PaymentService } from './../payment/payment.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {

  @Input() dataCredit: CreditCardModel;
  @Input() cardIsFlipped: boolean;
  @Input() classSkinCard: string;
  constructor(public paymentService: PaymentService) { }

  ngOnInit() {
  }

  changeItem(a){
    console.log(a);
  }
}
