import { FormControl, ValidationErrors } from '@angular/forms';

export function dateSmall(control: FormControl): ValidationErrors {
  if (control.value) {
    const value = control.value.replace(/_/g, '').split('/');
    const month = parseInt(value[0]);
    const year = parseInt('20' + value[1]);
    const currentYear = new Date().getFullYear();

    if (month < 1 || month > 12) {
      return { invaliddate: true };
    }

    if (year < 1920 || year < currentYear) {
      return { invaliddate: true };
    }

    return null;
  }
}
