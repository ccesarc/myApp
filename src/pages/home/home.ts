import { SobrePage } from './../sobre/sobre';
import { Component } from '@angular/core';
import { NavController, MenuController, AlertController } from 'ionic-angular';
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
    public alertCtrl: AlertController,
    ) {
     console.log('ionViewDidLoadHomeconstructor');
     //console.log(this.connectionService.getUser());
  }

  getCoordenadas(){
    console.log('getCoordenadasHome')
    this.connectionService.getCoordenadas();
  }

  getPushNotification(){
    console.log('getPushNotification')
    this.connectionService.getPushNotification();
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
    console.log('ionViewDidLoadonSobre');
    this.navCtrl.push(SobrePage);

  }

  

  onTirarFoto() : void {
    this.connectionService.onTirarFoto();
  }

  codigoDeBarras : String;

  onBarcodeScanner() : void {
   //this.connectionService.onBarcodeScanner();

    console.log(this.connectionService.onBarcodeScanner());

    //this.codigoDeBarras = onBarcodeScanner.text;

    //this.showAlert('onBarcodeScanner ok ', " onBarcodeScanner ok format 1: "+ onBarcodeScanner.format);
    //this.showAlert('onBarcodeScanner ok ', " onBarcodeScanner ok format 2: "+ onBarcodeScanner.text);

    this.navCtrl.push(SobrePage, {itemid: 'onBarcodeScanner'});

  }

  showAlert(title:string,subTitle:string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['OK']
    });
    alert.present();
  }
  

}
