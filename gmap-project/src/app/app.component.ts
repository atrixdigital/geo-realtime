import { Component,OnInit} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { HaversineService, GeoCoord } from 'ng2-haversine';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  data;
 ico ='https://www.metlink.org.nz/themes/metlink2015/images/icons/train.svg';
 label ='train1'
  constructor(  public db: AngularFireDatabase){
    //this.items = db.object('lat').valueChanges();
    this.data = db.object('data').valueChanges();
  }
  ngOnInit() {
}
  //items: Observable<any>;
  
  title: string = 'My first AGM project';
  // lat: number = 33.5984;
  // lng: number = 73.0441;
  i = 100;

  //getDistanceFromLatLonInKm(x,) {
   
//   }
//   tryHaversine(lat1,long1,lat2,long2) {
    
//        let madrid: GeoCoord = {
//            latitude: lat1,
//            longitude: long1
//        };
    
//        let bilbao: GeoCoord = {
//            latitude: lat2,
//            longitude: long2
//        };
    
//        let meters = this._haversineService.getDistanceInMeters(madrid, bilbao);
//        let kilometers = this._haversineService.getDistanceInKilometers(madrid, bilbao);
//        let miles = this._haversineService.getDistanceInMiles(madrid, bilbao);
    
//        console.log(`
//            The distance between Madrid and Bilbao is:
//                - ${meters} meters
//                - ${kilometers} kilometers
//                - ${miles} miles
//        `);
//    }
  


  // clickedMarker(label: string, index: number) {
  //   console.log(`clicked the marker: ${label || index}`)
  // }
  
}
