import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Profile } from '../services/profile' 
import { SProfileService } from '../services/s-profile.service'


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

student: Profile= {
  id: '',
  Enrollment: 0,
  First_Name: '',
  Last_Name: ''
}

adminForm: FormGroup;


  constructor(public profileService: SProfileService) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    if(this.student.Enrollment!=0 && this.student.First_Name!='')
     {
       this.profileService.addProfile(this.student);
       this.student.id= '';
       this.student.First_Name= '';
       this.student.Last_Name= '';    
     }
  }


  
}