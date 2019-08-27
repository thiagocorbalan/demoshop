import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatTooltipModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
import { AppComponent } from './app.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AsideComponent } from './layout/aside/aside.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { ControlMessagesComponent } from './share/control-messages/control-messages.component';
import { UiCardMaskPipe } from './share/pipes/ui-card-mask.pipe';

registerLocaleData(localePt, 'pt');



@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      AsideComponent,
      PaymentComponent,
      CreditCardComponent,
      ControlMessagesComponent,
      UiCardMaskPipe
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MatFormFieldModule,
      MatInputModule,
      MatOptionModule,
      MatSelectModule,
      MatTooltipModule,
      NgxMaskModule.forRoot()
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
