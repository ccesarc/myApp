import { Component } from '@angular/core';
import { NavController, NavParams, ViewController  } from 'ionic-angular';

/*
  Generated class for the Modal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html'
})
export class ModalPage {  
  character;
  

  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController, public navParams: NavParams,  public params: NavParams) {

    this.character = params.data;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  

}
