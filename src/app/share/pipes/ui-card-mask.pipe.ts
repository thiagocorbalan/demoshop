import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uicardmask'
})
export class UiCardMaskPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let valueFormated;
    if (value) {
      value = value.toString().replace(/\_|\./g, '');
      const valCount = value.length;
      const mask = '****************';
      valueFormated = mask.substring(0, valCount).replace('*', value).concat(mask.substring(valCount))



      return valueFormated.substring(0, 4)
        .concat(' ')
        .concat(valueFormated.substring(4, 8))
        .concat(' ')
        .concat(valueFormated.substring(8, 12))
        .concat(' ')
        .concat(valueFormated.substring(12, 16))

    }

    return valueFormated;
  }

}
