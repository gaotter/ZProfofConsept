import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppModel } from '../app-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input()
  model:AppModel;

  
  @Output()
  seSearch:EventEmitter<void>  = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }


  goToSearch() {
    console.log("se search");
this.seSearch.next();
  }
}
