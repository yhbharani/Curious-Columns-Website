import { Component, OnInit, Input } from '@angular/core';
import{ AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  StudentProfile$;
 

  @Input() year: number;
  constructor(private db: AngularFirestore) { 

    this.StudentProfile$=db.collection('StudentProfile').valueChanges()

  }



  ngOnInit(): void {
  }

}
