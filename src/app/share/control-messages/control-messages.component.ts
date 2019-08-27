import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-control-messages',
  template: `<ng-template [ngIf]="errorMessage !== null"><span [innerHTML]="errorMessage"></span></ng-template>`
})
export class ControlMessagesComponent {
  @Input() control: FormControl;
  @Input() placeholder: string;

  constructor() { }

  private getValidatorErrorMessage(validatorName: string, validatorValue?: any, placeholder?: string) {

    placeholder = placeholder != null ? placeholder : 'Campo';

    const config = {
      required: `${placeholder} é <b>obrigatório</b>`,
      invalid_date: 'Data está <b>inválida</b>',
      invalid_mail: 'Email <b>inválido</b>',
      invalid_cpf: 'CPF é <b>inválido</b>',
      invalid_fullname: 'Digite o <b>Nome completo</b>',
      invalid_card: 'O Cartão é <b>inválido</b>',
      invalid_length_card: 'A quantidade de caracteres digitados é <b>inválida</b>',
      invalid_bradesco: 'Conta ou Agência do Bradesco <b>inválido</b>',
      invalid_santander: 'Conta ou Agência do Santander <b>inválido</b>',
      invalid_matchPass: 'As senhas estão diferentes',
      minlength: `O campo deve conter no <b>mínimo ${validatorValue.requiredLength} caracteres</b>.`,
      maxlength: `O campo deve conter no <b>máximo ${validatorValue.requiredLength} caracteres</b>.`,
      recruiterPass: `Senha indisponível para utilização. Escolha outra senha.`,
      passwordFail: `Senha não cofere.`
    };

    return config[validatorName];
  }

  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName)) {
        return this.getValidatorErrorMessage(propertyName, this.control.errors[propertyName], this.placeholder);
      }
    }

    return null;
  }
}
