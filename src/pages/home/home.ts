import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { SobrePage } from './../sobre/sobre';
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
    private menuCtrl: MenuController,
    private push: Push
    ) {
     console.log('ionViewDidLoadHomeconstructor');
     //console.log(this.connectionService.getUser());     

      const options: PushOptions = {
          android: {
              senderID: '495060840000 '
          },
          ios: {
              alert: 'true',
              badge: true,
              sound: 'false'
          },
          windows: {}
        };

        const pushObject: PushObject = this.push.init(options);

        pushObject.on('notification').subscribe(notification => console.log('Received a notification', notification));

        pushObject.on('registration').subscribe(registration => console.log('Device registered', registration));

        pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));


     
  }

  ionViewDidLoad() {
    //this.menuCtrl.enable(true);
    //this.menuCtrl.open();

    this.menuCtrl.enable(true, 'menuTopo1');
    this.menuCtrl.enable(true, 'menuTopo2');
    //this.menuCtrl.open('menuTopo1');


    console.log('ionViewDidLoadHome');
    console.log(this.connectionService.getUser());
    // this.navCtrl.setRoot(OverlayPage); 
  }

  onSobre() : void {

    this.navCtrl.push(SobrePage);

  }

}
