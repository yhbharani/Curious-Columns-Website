import { Component, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnDestroy {

StudentProfile: any[];
subscription: Subscription;

  constructor( private db: AngularFirestore) { 
   this.subscription= db.collection('StudentProfile').valueChanges().
    subscribe( StudentProfile => { this.StudentProfile =StudentProfile; 
      console.log(this.StudentProfile);  
    
    }); 

    
  }


  
ngOnDestroy()
{
 
this.subscription.unsubscribe();

}


}
