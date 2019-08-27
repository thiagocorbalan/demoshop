import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/share/services/api.service';
import { CreditCardModel } from '../credit-card/credit-card.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private apiService: ApiService) {}


  getPrices() {
    return this.apiService.get(`/payment/get-prices`);
  }

  getCardFlags() {
    return this.apiService.get(`/payment/get-card-flags`);
  }

  effectPayment(dataCreditCard: CreditCardModel) {
    return this.apiService.post('payment/effect-payment', dataCreditCard);
  }

}
