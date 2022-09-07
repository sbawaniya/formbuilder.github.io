import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../modules/shared/classes/custom-validators';

@Component({
  selector: 'app-password-validator',
  templateUrl: './password-validator.component.html',
  styleUrls: ['./password-validator.component.scss']
})
export class PasswordValidatorComponent implements OnInit {

  public frmSignup!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.frmSignup = this.createSignupForm();
  }

  createSignupForm(): FormGroup {
    return this.fb.group(
      {
        password: [ null, Validators.compose([
           Validators.required,
           // 2. check whether the entered password has a number
           CustomValidators.patternValidator(/\d/, { hasNumber: true }),
           CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
           CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
          //  CustomValidators.patternValidator(/[ [!@#$%^&*()_+-=[]{};':"|,.<>/?]/](<mailto:!@#$%^&*()_+-=[]{};':"|,.<>/?]/>), { hasSpecialCharacters: true }),
           Validators.minLength(8)])
        ],
        confirmPassword: [null, Validators.compose([Validators.required])]
     },
     {
        validator: CustomValidators.passwordMatchValidator
     });
  }

  submit(): void {
    
  }

}
