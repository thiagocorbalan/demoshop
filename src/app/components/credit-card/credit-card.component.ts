import { Component, OnInit } from '@angular/core';
import { PaymentService } from './../payment/payment.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {

  constructor(public paymentService: PaymentService) { }

  ngOnInit() {
  }

}
