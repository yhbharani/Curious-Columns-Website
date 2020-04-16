import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent  {

StudentProfile: any[];
  constructor( private db: AngularFirestore) { 
    db.collection('StudentProfile').valueChanges().
    subscribe( StudentProfile => { this.StudentProfile =StudentProfile; 
      console.log(this.StudentProfile);  
    
    }); 

    
  }


  



}
