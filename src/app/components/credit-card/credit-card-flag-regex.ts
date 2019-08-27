export class CreditCardFlagRegex {
    static visa: RegExp = /^4[0-9]{6,}$/gm;
    static mastercard: RegExp = /^5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,}$/gm;
    static elo: RegExp = /^((627780)|(636[2-3](6|9)[7-9])|(4[0,3,5](11|76|8935|1416))|(50[0,4,6,9](7|175|699|000))|(65[0,1]))/gm;
    static dinners: RegExp = /^3(?:0[0-5]|[68][0-9])[0-9]{4,}$/gm;
    static hipercard: RegExp = /^(606282\d{10}(\d{3})?)|(3841\d{15})$/gm;

}
