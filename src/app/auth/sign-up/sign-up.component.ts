import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/services/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  user!: User;
  registerForm = this.fb.group({
    firstName: ["", [Validators.required]],
    lastName: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    passwords: this.fb.group({
      password: ["", [Validators.required, Validators.min(6)]],
      confirmPassword: ["", [Validators.required, Validators.min(6)]]
    }, { validator: this.passwordConfirming })
  });
  loading: boolean = false;
  verifyEmailLoading: boolean = false;
  constructor(public authService: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  signUp() {
    this.loading = true;
    this.user = new User(<User>this.registerForm.value);
    let email = this.registerForm.value.email ? this.registerForm.value.email : "";
    console.log((this.registerForm.value.passwords));
    let password = this.registerForm.value.passwords.password ? this.registerForm.value.passwords.password : "";
    this.authService.signUp(email.toString(),password.toString(),this.user)
      .then(obj => {
        this.loading = false;
      })
      .catch(e => {
        //this.errorMsg = "Username/Password is wrong. Please try again.";
        this.loading = false;
      });
  }
  passwordConfirming(c: FormGroup) {
    if (c.controls['password'].value?.length && c.controls['confirmPassword'].value?.length &&
      c.controls['password'].value !== c.controls['confirmPassword'].value) {
      return { passwordMismatch: true };
    } else {
      return null;
    }
  }

  emailExist() {
    if(this.registerForm.get('email')?.valid){
      this.verifyEmailLoading = true;
      let email = this.registerForm.value.email ? this.registerForm.value.email : "";
        this.authService.isEmailAlreadyExist(email).then(e => {
          if(e){
            this.registerForm.get('email')?.setErrors({emailExist:true});
          } else{
            this.registerForm.get('email')?.setErrors(null);
          }
          this.verifyEmailLoading = false;
        })
    }
  }
}
