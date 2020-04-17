import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service'

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  adminForm: FormGroup;

  validation_messages = {
    'firstName': [
      { type: 'required', message: 'Name is required.' }
    ],
    'lastName': [
      { type: 'required', message: 'Name is required.' }
    ],
    'enroll': [
      { type: 'required', message: 'enrollment is required.' }
    ],
    'profileID': [
      { type: 'required', message: 'profileID is required.' },
    ]
  };

  constructor(
    private fb: FormBuilder,
    public dbService: FirebaseService,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.adminForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      enroll: ['', Validators.required ],
      profileID: ['', Validators.required]
    });
  }

  onSubmit(value){
    this.dbService.createUser(value)
    .then(
      res => {
        this.resetFields();
      }
    )
  }

  resetFields(){
    this.adminForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      enroll: new FormControl('', Validators.required),
      profileID: new FormControl('', Validators.required)
    });
  }

}
