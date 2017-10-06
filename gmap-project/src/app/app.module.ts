import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MapComponent } from './map/map.component';
import { HaversineService } from "ng2-haversine";



@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDiYP6TvmfQX1SF1zMudA4H4-qaiX56Ims'
    }),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    
  ],
  providers: [HaversineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
