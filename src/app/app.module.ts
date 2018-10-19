import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { UploadComponent } from './upload/upload.component';
import { DetailsComponent } from './details/details.component';
import { AppServiceService } from './app-service.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UploadComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
