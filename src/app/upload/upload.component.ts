import { Component, OnInit, Input } from '@angular/core';
import { AppModel } from '../app-service.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  @Input()
  model:AppModel;
  constructor() { }

  ngOnInit() {
  }

}
