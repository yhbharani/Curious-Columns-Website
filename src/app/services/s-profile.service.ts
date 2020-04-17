import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Profile } from '../list-display/profile'
import{ AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class SProfileService {

  profiles: Observable<Profile[]>;
  dbCollection: AngularFirestoreCollection<Profile>;

  constructor( public db: AngularFirestore) { 

    this.dbCollection=db.collection<Profile>('StudentProfile')
   // this.profiles=this.db.collection('StudentProfile').valueChanges();

  // get the data and the id use the map operator.
  this.profiles = this.dbCollection.snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const data = a.payload.doc.data() as Profile;
      const id = a.payload.doc.id;
      return { id, ...data };
    }))
  );

  }

  getProfiles(){
    return this.profiles;
  }

  addProfile(db: Profile){
      this.dbCollection.add(db);
  }
}
