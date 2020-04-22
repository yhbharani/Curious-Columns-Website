import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  profile: firebase.User;

  constructor(public auth: AuthService, private route: Router) { 
  }


  ngOnInit(): void {    
    this.auth.getUserState().subscribe( user => {this.profile = user;});
  }

  logOut(){
    console.log("Logout Clicked");
   this.auth.logOut();
  }



  logIn(){
    this.route.navigate(['login']);
  }

  register(){
    this.route.navigate(['admin']);
  }

}