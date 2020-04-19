import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit  {

  profile: any;

  constructor(public auth: AuthService, private route: Router) { }

  ngOnInit(): void {    
    this.auth.getUserState().subscribe( user => {  this.profile = user; console.log( user) });
  }

  logOut(){
    this.auth.logOut();
  }

  logIn(){
    this.route.navigate(['login']);
  }

  register(){
    this.route.navigate(['admin']);
  }

}
