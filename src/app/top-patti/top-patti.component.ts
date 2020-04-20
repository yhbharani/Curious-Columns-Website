import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-patti',
  templateUrl: './top-patti.component.html',
  styleUrls: ['./top-patti.component.css']
})
export class TopPattiComponent implements OnInit {

  profile: firebase.User;

  searchRequest;
profileStatus: boolean=true;

constructor(public auth: AuthService, private route: Router) { }

  onKeyUp(){
    console.log("Search for " + this.searchRequest + " was conducted ");
    }

    ngOnInit(): void {    
      this.auth.getUserState().subscribe( user => {this.profile = user;});
    }
  
    logIn(){
      this.route.navigate(['login']);
    }
  
}
