import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { AppModel, Item } from '../app-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnChanges {
  ngOnChanges(changes:SimpleChanges): void {
    console.log("chages", changes);
    this.currentItem = changes.model.currentValue;
  }

  @Input()
  model:AppModel;

  currentItem:Item;
  

  
  @Output()
  seSearch:EventEmitter<void>  = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
    this.currentItem = this.model.selected;
  
  }


  goToSearch() {
    console.log("se search");
this.seSearch.next();
  }
}
