import { Component, OnInit, Input } from '@angular/core';
import{ AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Subscription, from } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Profile } from '../profile' 
import { SProfileService } from '../../services/s-profile.service'


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

profiles: Profile[];
  profilesCollection: AngularFirestoreCollection<Profile>;
 

  @Input() year: number;
  constructor(private profileService: SProfileService) { 


  }



  ngOnInit(): void {

    this.profileService.getProfiles().subscribe(data =>
    this.profiles=data
    );

  }

}
