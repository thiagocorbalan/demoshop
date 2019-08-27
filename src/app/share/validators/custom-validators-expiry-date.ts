import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function validateExpiryDate(d: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    if (control.value) {

      let currentDate: Date;
      currentDate = new Date(d);

      const currentMonth = currentDate.getMonth() + 1;
      const currentYear = currentDate.getFullYear();
      const date = control.value.replace(/_/g, '').split('/');

      const month = parseInt(date[0]);
      const year = parseInt(20 + date[1]);

      if (!(((year > currentYear && month > 0) || (year === currentYear && month > currentMonth)) && month <= 12)) {
        return { invalid_date: true };
      }

      return null;
    }
  }

}
