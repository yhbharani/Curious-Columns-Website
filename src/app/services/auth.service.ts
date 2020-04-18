import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentProfileComponent } from '../student-profile/student-profile.component';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, public router: Router) { }


  signUp(email, password){
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(
      value => { console.log('Sucess ' + value);
    this.router.navigate(['profile/:Enrollment']);
               } 
    ).catch()
  }
}
