import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.css']
})
export class ListDisplayComponent implements OnInit {



  view='First';
  currentYear=2020;   // <<=== Change Current Year Here
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(pram =>{ let v=pram.get('navView');
  this.view=v}
    );
  }

}
