import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'
import { Profile } from '../services/profile';
import { SProfileService } from '../services/s-profile.service';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  email:string= "";

  constructor(public auth: AuthService, private route: ActivatedRoute, public profileService: SProfileService) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe(
      prams=>{ this.email=prams.get('email')}
    );
      
    this.profileService.getProfileData(this.email);
  }

}
