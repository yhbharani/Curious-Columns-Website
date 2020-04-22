import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import{ AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
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

  authError: any;
  newStudent: Profile={
    Enrollment: 1,
    email:'',
    password:'',
  First_Name: '',
  Last_Name: ''
  };

  student: Profile= {
  uid: '',
  Enrollment: 1,
  First_Name: '',
  Last_Name: ''
}

profiles: Profile[];
profilesCollection: AngularFirestoreCollection<Profile>;

editState: boolean=false;
profileToEdit: Profile;



adminForm: FormGroup;


  constructor(public profileService: SProfileService,
    public auth: AuthService ) { }

  ngOnInit(): void {
    this.profileService.getProfiles().subscribe(data =>
      this.profiles=data)

      this.auth.eventAuthError$.subscribe(data=>{this.authError=data;})
  }



signUp(){
  this.auth.signUp( this.newStudent );   
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
    stu.uid=this.profileToEdit.uid;
    this.profileService.updateProfile(stu);
  

  }


  
}