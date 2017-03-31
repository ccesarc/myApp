import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Geolocation } from '@ionic-native/geolocation';
import { Push, Camera } from 'ionic-native';



// import 'rxjs/add/operator/toPromise';
/*
  Generated class for the ConnectionService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ConnectionService {
  
  usuarios:any;
  public base64Image: string;  

  constructor(
    public http: Http,
    public geolocation: Geolocation,    
    public alertCtrl: AlertController,
    public barcodeScanner:BarcodeScanner
    ) {
    console.log('Hello ConnectionService Provider');
  }

  showAlert(title:string,subTitle:string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['OK']
    });
    alert.present();
  }

  getCoordenadas():void{
    console.log('getCoordenadasServ')
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude      
      // resp.coords.longitude
      console.log(resp.coords.latitude)
      console.log(resp.coords.longitude)
      this.showAlert('getCurrentPosition','Lat: '+resp.coords.latitude);
      }).catch((error) => {
        console.log('Error getting location', error);
      });

      let watch = this.geolocation.watchPosition();
      watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
      console.log(data.coords.latitude)
      console.log(data.coords.longitude)
      this.showAlert('getCurrentPosition 2','Lat: '+data.coords.latitude);
    });
  }


  

  getPushNotification():void{

    let pushw = Push.init({
      android: {
        senderID: "495060840000"
      },
      ios: {
      alert: "true",
      badge: false,
      sound: "true"
      },
      windows: {}
    });
    
    pushw.on('registration', (data) => {
        console.log("device token ->", data.registrationId);
        this.showAlert('Device registered', "registration: " + data.registrationId.toString());
        this.showAlert('Device registered', "registration: " + data.registrationId);
        alert(data.registrationId.toString());
        //TODO - send device token to server
    });

    pushw.on('notification', (data) => {
      console.log(data);
      alert("Hi, Am a push notification");
      this.showAlert('notification', "notification: " + data.title);
      this.showAlert('notification', "notification: " + data.count);
    });

    // pushw.on('notification', (data) => {
    //   console.log(data.message);
    //   console.log(data.title);
    //   console.log(data.count);
    //   console.log(data.sound);
    //   console.log(data.image);
    //   console.log(data.additionalData);
    // });

    pushw.on('error', (e) => {
      console.log(e.message);
      this.showAlert('Erro', "error: " + e.message);
    });


  //   let push = this.push.init({
  //     android: {
  //       senderID: "495060840000"
  //     },
  //     ios: {
  //       alert: "true",
  //       badge: true,
  //       sound: 'false'
  //     },
  //     windows: {}
  //   });

    

  //   push.on('notification').subscribe(notification =>
  //     {
  //       console.log('Received a notification', notification)
  //       this.showAlert('Received a notification', "notification: "+notification);
  //     }
  //   );

  //   push.on('registration').subscribe(registration => 
  //   { 
  //     console.log('Device registered', registration)
  //     this.showAlert('Device registered', "registration: "+registration);
  //     this.showAlert('Device registered', "registration: "+registration);
  //   }
    
  //   );

  //   push.on('error').subscribe(error => {
  //     console.error('Error with Push plugin', error)
  //     this.showAlert('Error with Push plugin', "error: "+error);
  //   });
  }

  //https://randomuser.me/api/?results=10

  getLoginUser(email:string,senha:string) : Promise <Response> {
    if(email==undefined){
      email = '00000000';
    }
    return this.http.get('http://viacep.com.br/ws/'+ email.trim() +'/json/').toPromise();
  }

  getLoginUser2(page:string,results:string) : Promise <Response> {
    if(page==''){
      page = '1';
    }
    if(results==''){
      results = '10';
    }
    return this.http.get('https://randomuser.me/api/?page='+page+'&results='+results).toPromise();
  }

  getUser(){
    this.usuarios = localStorage.getItem("usuarios");
    return JSON.parse(this.usuarios)
  }

  logOutUser(){
    this.usuarios = localStorage.removeItem("usuarios");
  }


  onTirarFoto() : void {
    
    console.log('ionViewDidLoadononTirarFoto');
    this.showAlert('ionViewDidLoadononTirarFoto', "ionViewDidLoadononTirarFoto: ");
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 100,
        targetHeight: 100
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;

         this.showAlert('base64Image', " base64Image : "+ imageData);

    }, (err) => {
      console.log(err);
      this.showAlert('err', "err: "+ err);
        
    });
    

  }


  barcodeText : String;
  barcodeFormat: String;

  onBarcodeScanner() : any {
    this.barcodeScanner.scan().then((barcodeData) => {
    // Success! Barcode data is here
      //this.showAlert('onBarcodeScanner ok ', " onBarcodeScanner ok : "+ barcodeData);
      //this.showAlert('onBarcodeScanner ok ', " onBarcodeScanner ok text : "+ barcodeData.text);
      this.showAlert('onBarcodeScanner ok ', " onBarcodeScanner ok format : "+ barcodeData.format);
      //return barcodeData;
      return 'barcodeData';
    }, (err) => {
        // An error occurred
        this.showAlert('onBarcodeScanner erro', " onBarcodeScanner erro : "+ err);
    }); 
    


  }



}