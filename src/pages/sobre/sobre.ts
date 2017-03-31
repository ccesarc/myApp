import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Sobre page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html'
})
export class SobrePage {

  public itemid;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    //this.itemid = navParams.data.itemid;

    this.itemid = navParams.get('itemid');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SobrePage');
  }

}
