import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authError: any;
  Email: string;
  Password: string;

  constructor(public auth: AuthService) { }
 

  ngOnInit(): void {
    this.auth.eventAuthError$.subscribe(data=>{this.authError=data;})
  }

  logIn(){
    this.auth.logIn(this.Email, this.Password);
  }

}
