import { Component, OnInit } from '@angular/core';
import { AppServiceService, AppModel, Item } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  model: AppModel;
  ngOnInit(): void {

  }
  constructor(private appServiceService: AppServiceService) {
    this.appServiceService.modelOb.subscribe(s => this.model = s);
  }

  seDetails(item:Item) {
    this.appServiceService.setDetails(item);
  }
  seSearch() {
    this.appServiceService.setSearch();
  }
  
}
