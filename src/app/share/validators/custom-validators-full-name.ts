import { FormControl, ValidationErrors } from '@angular/forms';

export function validateFullName(control: FormControl): ValidationErrors {
  if (control.value) {
    let name = control.value.trim().split(' ');
    if (name.length > 1 && name[1].length > 0) {
      return null;
    } else {
      return { invalid_fullname: true }
    }
  }
}
