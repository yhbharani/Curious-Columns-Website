import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) {}

  getUser(userKey){
    return this.db.collection('StudentProfile').doc(userKey).snapshotChanges();
  }

  updateUser(userKey, value){
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('StudentProfile').doc(userKey).set(value);
  }

  deleteUser(userKey){
    return this.db.collection('StudentProfile').doc(userKey).delete();
  }

  getUsers(){
    return this.db.collection('StudentProfile').snapshotChanges();
  }

  searchUsers(searchValue){
    return this.db.collection('StudentProfile',ref => ref.where('nameToSearch', '>=', searchValue)
      .where('nameToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }

  searchUsersByAge(value){
    return this.db.collection('StudentProfile',ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  }


  createUser(value){
    return this.db.collection('StudentProfile').add({
      First_Name: value.firstName,
      nameToSearch: value.name.toLowerCase(),
      Last_Name: value.lastName,
      enroll: parseInt(value.age),
      profileID: value.profileID
    });
  }
}