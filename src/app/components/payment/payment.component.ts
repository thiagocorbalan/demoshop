import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from './payment.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  creditFg: FormGroup;

  constructor(
    private fb: FormBuilder,
    private paymentService: PaymentService) {
  }

  ngOnInit() {
     // [Validators.required, validateCard(this.cardNumberActive)]
     // validateExpiryDate(this.keys.generationTime)]
    this.creditFg = this.fb.group({
      number: [null, Validators.required],
      cvv: [null, Validators.required],
      holderName: [null, Validators.required],
      expiryMonth: [null, Validators.required],
      installments: [null, Validators.required],
      flagCard: null
    });
  }

  toggleFlipCard(){
    this.paymentService.cardIsFlipped = !this.paymentService.cardIsFlipped;
  }

}
