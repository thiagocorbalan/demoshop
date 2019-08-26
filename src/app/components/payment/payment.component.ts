import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  creditFg: FormGroup

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    // this.creditFg = this.fb.group({
    //   number: [undefined, [Validators.required, validateCard(this.cardNumberActive)]],
    //   cvc: [undefined, Validators.required],
    //   holderName: [undefined, Validators.required],
    //   expiryMonth: [undefined, [Validators.required, validateExpiryDate(this.keys.generationTime)]],
    //   flagCard: null
    // });
  }

}
