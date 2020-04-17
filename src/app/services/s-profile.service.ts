import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../list-display/profile'
import{ AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class SProfileService {

  profiles: Observable<Profile[]>;

  constructor( public db: AngularFirestore) { 

    this.profiles=this.db.collection('StudentProfile').valueChanges();
  }

  getProfiles(){
    return this.profiles;
  }
}
