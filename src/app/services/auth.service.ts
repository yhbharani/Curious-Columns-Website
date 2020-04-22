import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore , AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, of} from 'rxjs';
import { Profile } from './profile';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 private eventAuthError = new BehaviorSubject<string>(""); 
 public eventAuthError$= this.eventAuthError.asObservable();

 user$: Observable<Profile>; //This is the Observable for the currently Logged In User 
 
 newProfile: any; //This variable holds details of the new user

 constructor(public afAuth: AngularFireAuth, public router: Router, public db: AngularFirestore) 
 { //Assigning user$ to currently loggeg in User
   this.user$=this.afAuth.authState.pipe(                                  
    switchMap(data=>{
      if(data){
        return this.db.doc<Profile>(`StudentProfile/${data.uid}`).valueChanges();
       } else{return of(null);}
     })
   );
 }
 
  getUserState(){
    return this.afAuth.authState;
  };
  
  signUp(student: Profile){
    this.afAuth.auth.createUserWithEmailAndPassword(student.email, student.password).then(
      profileInfo => { 
        this.newProfile= student;
        profileInfo.user.updateProfile({
          displayName: student.First_Name+'  '+ student.Last_Name
        });
        this.insertProfileData(profileInfo).then(()=>{       
         this.router.navigate(['/profile',student.Enrollment]);
        });
      }
    ).catch( error=> { this.eventAuthError.next(error);});

    
  };

  insertProfileData(profileInfo: firebase.auth.UserCredential) {
       return this.db.doc(`StudentProfile/${profileInfo.user.uid}`).set({
         uid: profileInfo.user.uid,
         email: this.newProfile.email,
         password: this.newProfile.password,
         Enrollment: this.newProfile.Enrollment,
         First_Name:this.newProfile.First_Name,
         Last_Name: this.newProfile.Last_Name,
         
       })
  };

  logIn(email: string, password: string){
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
      profileInfo => { 
        console.log('Sucess : ' + profileInfo);   
         this.router.navigate(['/profile/'+ email]);
      }
    ).catch( error=> { this.eventAuthError.next(error);});
  }
  

  logOut(){
    console.log("login function reached");
    console.log(this.afAuth);

   return this.afAuth.auth.signOut().then(()=>{       
      this.router.navigate(['']);
    })
  }

}
