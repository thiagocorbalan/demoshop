import { PaymentPriceModel } from './payment-price.model';
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
  installmentsOptions: Array<number>;
  cardIsFlipped: boolean;

  constructor(
    private fb: FormBuilder,
    private paymentService: PaymentService) {

      this.installmentsOptions = new Array();
  }

  ngOnInit() {
    // [Validators.required, validateCard(this.cardNumberActive)]
    // validateExpiryDate(this.keys.generationTime)]
    this.createForm();
    this.creditFg.controls.installments.disable();
    this.loadInstallmentsOptions();
  }

  private createForm(){
    this.creditFg = this.fb.group({
      number: [null, Validators.required],
      cvv: [null, Validators.required],
      holderName: [null, Validators.required],
      expiryMonth: [null, Validators.required],
      installments: [null, Validators.required],
      flagCard: null
    });
  }

  private loadInstallmentsOptions(){
    this.paymentService.getPrices().subscribe( (data: PaymentPriceModel) => {
      let i = 1;
      while (i <= data.maxInstallments ) {
        const price = data.price / i;
        this.installmentsOptions.push(price);
        i++;
      }
      this.creditFg.controls.installments.enable();
    });
  }

  toggleFlipCard() {
    this.cardIsFlipped = !this.cardIsFlipped;
  }

}
