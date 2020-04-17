import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  adminForm: FormGroup;

 

  constructor(
    private fb: FormBuilder,
 
    private router: Router) { }

  ngOnInit(): void {
    
  }
}