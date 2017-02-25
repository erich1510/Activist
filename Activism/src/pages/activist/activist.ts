import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {} from '../../providers/activistdata';
import {activistdata} from "../../providers/activistdata";

/*
  Generated class for the Activist page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-activist',
  templateUrl: 'activist.html'
})
export class ActivistPage {

  point: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public actdata: activistdata) {
    this.point=actdata.getPoints();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivistPage');
  }

  getPoints(){
    return this.point;
  }


}
