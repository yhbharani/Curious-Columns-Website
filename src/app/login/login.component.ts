import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(public auth: AuthService) { }
 

  ngOnInit(): void {
  }

  logIn(){
    this.auth.logIn(this.email, this.password);
    this.password='';
    this.email='';
  }

}
