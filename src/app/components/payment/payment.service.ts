import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/share/services/api.service';
import { environment } from './../../../environments/environment';
import { CreditCardModel } from '../credit-card/credit-card.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private API = environment.ApiURL;

  constructor(private apiService: ApiService<CreditCardModel>) { }

  cardIsFlipped: boolean;

  getInitialData() {
    this.apiService.get(this.API);
  }

}
