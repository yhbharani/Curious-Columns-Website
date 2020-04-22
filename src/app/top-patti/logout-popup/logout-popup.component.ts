import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-popup',
  templateUrl: './logout-popup.component.html',
  styleUrls: ['./logout-popup.component.css']
})
export class LogoutPopupComponent implements OnInit {



  constructor(public auth: AuthService, private route: Router) { }

  ngOnInit(): void {    
  }

  logOut(){
    console.log("Logout Clicked");
   this.auth.logOut();
  }
  

}
