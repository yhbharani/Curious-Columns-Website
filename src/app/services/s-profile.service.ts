import { Injectable, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators'
import { Profile } from '../services/profile'
import{ AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SProfileService implements OnDestroy {

  profiles: Observable<Profile[]>;
  dbCollection: AngularFirestoreCollection<Profile>;
  profileDoc: AngularFirestoreDocument<Profile>;
  profile: any;
  subscription: Subscription;


  constructor( public db: AngularFirestore) { 

    this.dbCollection=db.collection<Profile>('StudentProfile')
   // this.profiles=this.db.collection('StudentProfile').valueChanges();

  // get the data and the id use the map operator.
  this.profiles = this.dbCollection.snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const data = a.payload.doc.data() as Profile;
      const uid = a.payload.doc.id;
      return { uid, ...data };
    }))
  );

  }

  getProfiles(){
    return this.profiles;
  }

  getProfileData(email: string){
    this.profile=this.db.collection("StudentProfile", ref => ref.where('email', '==', email)).valueChanges();
    
    this.subscription=this.profile.subscribe(users => { 
      this.profile = users[0];
    });
    
  }

  addProfile(student: Profile){
      this.dbCollection.add(student);
  }

  deleteProfile(student: Profile){

    this.profileDoc=this.db.doc(`StudentProfile/${student.uid}`);
    this.profileDoc.delete();

  }

  updateProfile(stu: Profile){

    this.profileDoc=this.db.doc(`StudentProfile/${stu.uid}`);
    this.profileDoc.update(stu);
   
  }

 ngOnDestroy(): void{
   this.subscription.unsubscribe();
 }


}



