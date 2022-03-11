import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class ValidarCamposService {
  constructor() {}

  hasError(control: AbstractControl, errorName: string): boolean {
    return control.hasError(errorName);
  }

  hasErrorValidate(control: AbstractControl, errorName: string): boolean {
    if (
      (control.invalid || control.dirty) &&
      this.hasError(control, errorName)
    ) {
      return true;
    }
    return false;
  }
}
