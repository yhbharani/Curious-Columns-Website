import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-patti',
  templateUrl: './top-patti.component.html',
  styleUrls: ['./top-patti.component.css']
})
export class TopPattiComponent implements OnInit {

  searchRequest;
profileStatus: boolean=true;

  constructor() { }

  onKeyUp(){
    console.log("Search for " + this.searchRequest + " was conducted ");
    }

  ngOnInit(): void {
  }

}
