import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import{ AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Profile } from '../services/profile' 
import { SProfileService } from '../services/s-profile.service'
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  addStudent: Profile={
    Enrollment: 1,
  First_Name: '',
  Last_Name: ''
  };


  student: Profile= {
  id: '',
  Enrollment: 1,
  First_Name: '',
  Last_Name: ''
}

profiles: Profile[];
profilesCollection: AngularFirestoreCollection<Profile>;

editState: boolean=false;
profileToEdit: Profile;

email: string;
password: string;

adminForm: FormGroup;


  constructor(public profileService: SProfileService,
    public auth: AuthService ) { }

  ngOnInit(): void {
    this.profileService.getProfiles().subscribe(data =>
      this.profiles=data)
  }



signUp(enroll, password){
  this.auth.signUp(this.email, this.password);
  this.password='';
  this.email='';
}




  onSubmit(){
    if(this.addStudent.Enrollment!=0 && this.addStudent.First_Name!='')
     {
       this.profileService.addProfile(this.addStudent);
       this.addStudent.First_Name= '';
       this.addStudent.Last_Name= '';
       this.addStudent.Enrollment= 1;    
     }
  }

  deleteProfile($event, student:Profile){

    this.profileService.deleteProfile(student);

  }

  editProfile($event, student:Profile){

    this.editState=!this.editState;
    this.profileToEdit= student;
    this.student.First_Name= student.First_Name;
    this.student.Last_Name= student.Last_Name;
    this.student.Enrollment= student.Enrollment; 
    

  }

  updateProfile($event, stu: Profile){
    stu.id=this.profileToEdit.id;
    this.profileService.updateProfile(stu);
  

  }


  
}