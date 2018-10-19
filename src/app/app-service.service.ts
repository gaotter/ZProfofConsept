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
  sugestions: Item[] = [
    new Item(),
    {
      brand:"Nike",
      model:"Cold runner",
      imageUrl:"https://cdn.shopify.com/s/files/1/1040/1138/products/rosa-ledsko-fra-ledtrend0797_5b967f40-b2e1-48cb-9dda-7021c3127970_1024x1024.jpg?v=1533041356"
    },
    {
      brand:"Nike",
      model:"High runner",
      imageUrl:"https://www.highheels-no.com/damesko/hoeyhaeler/popup_images/svart-12-5-cm-STOMP-08-lolita-sko-gothic-wedge-platasko-med-kilehaeler-8785_0.jpg"
    },
    {
      brand:"Nike",
      model:"Cool runner",
      imageUrl:"https://dms-cf-03.dimu.org/image/032yizVJSdkj?dimension=1200x1200"
    },
  ];
}

export class Item {
  imageUrl = "wwwroot/img/hvite-LED-sko-3-forsidebilde_grande.jpg";
  model = "Hvite LED sko";
  brand = "Nike"

}

