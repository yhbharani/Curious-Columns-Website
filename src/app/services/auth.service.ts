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

logIn(email: string, password: string){
  console.log(email+password);
  this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
    value=> { console.log('Nice It Worked');
  this.router.navigate(['profile/:Enrollment']);
}
  ).catch( err=> { console.log('What is wrong with you?',err.message);
});
}


  signUp(email: string, password: string){
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(
      value => { console.log('Sucess ' + value);
    this.router.navigate(['profile/:Enrollment']);
               } 
    ).catch( err=> { console.log('What is wrong with you?',err.message);
  })
  }

}
