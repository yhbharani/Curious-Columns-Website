import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-popup',
  templateUrl: './logout-popup.component.html',
  styleUrls: ['./logout-popup.component.css']
})
export class LogoutPopupComponent implements OnInit {


  profile: firebase.User;

  constructor(public auth: AuthService, private route: Router) { }

  ngOnInit(): void {    
    this.auth.getUserState().subscribe( user => {this.profile = user;});
  }

  logOut(){
    console.log("Logout Clicked");
   this.auth.logOut();
  }
  

}
