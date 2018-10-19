import { Component, OnInit, Input } from '@angular/core';
import { AppServiceService, AppModel } from '../app-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input()
  model:AppModel;

  public showResultContent: boolean = false;


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
