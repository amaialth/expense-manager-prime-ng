import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/shared/services/auth.service';
import { User } from 'src/shared/services/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  
  firstname: string ="";
  lastname: string = "";
  username: string = "";
  password: string = "";
  confirmpassword: string = "";
  email: string = "";
  phone: string = "";
  loading: boolean = false;
  
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  signUp(){
    this.loading = true;
  }
}
