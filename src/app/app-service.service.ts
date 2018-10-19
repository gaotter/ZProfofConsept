import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
modelSubject:BehaviorSubject<AppModel>;
modelOb:Observable<AppModel>;

  appModel: AppModel = new AppModel();
  constructor() { 
    this.modelSubject = new BehaviorSubject<AppModel>(this.appModel);
    this.modelOb = this.modelSubject.asObservable();

  }



  getModel(): AppModel {
    return this.appModel;
  }

  setModel(model: AppModel): void {
     this.modelSubject.next(model);
  }
}


export class AppModel {
  searchInput = 'Joggesko';
  sudjestions: string[] = [];
}