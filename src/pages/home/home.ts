import { OverlayPage } from './../overlay/overlay';
import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { ConnectionService } from './../../providers/connection-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController, 
    public connectionService:ConnectionService,
    private menuCtrl: MenuController
    ) {
     console.log('ionViewDidLoadHomeconstructor');
     //console.log(this.connectionService.getUser());     
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(true);    
    console.log('ionViewDidLoadHome');
    console.log(this.connectionService.getUser());
    // this.navCtrl.setRoot(OverlayPage); 
  }

}
