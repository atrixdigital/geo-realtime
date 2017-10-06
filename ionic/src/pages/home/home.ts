import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
gelocation;
title = 'Atrix Geo-location';
item;
data;
  constructor(public navCtrl: NavController, 
    private geolocation: Geolocation,private db: AngularFireDatabase) {
      this.item = db.object('data');
      this.data = db.object('data').valueChanges();
      
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp);
    }).catch((err)=>{
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      console.log(data);
      this.item.update({
        lat:data.coords.latitude,
        lng:data.coords.longitude
      }).then(res=>{
        console.log('cordinate updated');
      })
      
    });      
      
  }

  

}
