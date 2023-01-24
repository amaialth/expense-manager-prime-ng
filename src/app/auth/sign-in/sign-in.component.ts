import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loading: boolean = false;
  errorMsg: string="";
  loginForm = this.fb.group({
    username: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]],
    rememberme: [false]
  });
  constructor(public authService: AuthService, private fb: FormBuilder, public router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.loading = true;
    this.authService.signIn(this.loginForm.value.username ? this.loginForm.value.username : "", this.loginForm.value.password ? this.loginForm.value.password : "").catch(e=>{
      console.log(e);
      this.errorMsg = "Username/Password is wrong. Please try again.";
      this.loading = false;
      this.loginForm.reset();
    });
  }
}
