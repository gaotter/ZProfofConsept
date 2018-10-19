import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppServiceService, AppModel, Item } from '../app-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input()
  model:AppModel;


  @Output()
  seDetails:EventEmitter<Item>  = new EventEmitter<Item>();

  public showResultContent: boolean = false;


  onItemClick(i:Item) {
    this.model.selected = i;
    this.seDetails.next(i);
  }

searchview:boolean = true;

searchdetails:boolean = false;

searchupload:boolean = false;

showSearch():void {
  this.searchdetails = false;
  this.searchupload = false;
  this.searchview = true;
}

showDetails():void {
  this.searchdetails = true;
  this.searchupload = false;
  this.searchview = false;
}


showUpload():void {
  this.searchdetails = false;
  this.searchupload = true;
  this.searchview = false;
}

  constructor() { }

  ngOnInit() {
    console.log(this.showResultContent);
  }

  showResult(){
    this.showResultContent = true;
  }
  
  hideResult(){
    this.showResultContent = false;
  }
}
