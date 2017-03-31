import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, MenuController } from 'ionic-angular';

import { ConnectionService } from './../../providers/connection-service';
import { HomePage } from './../home/home';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation. 
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  animations: [
 
    //For the logo
    trigger('flyInBottomSlow', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({transform: 'translate3d(0,2000px,0'}),
        animate('2000ms ease-in-out')
      ])
    ]),
 
    //For the background detail
    trigger('flyInBottomFast', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({transform: 'translate3d(0,2000px,0)'}),
        animate('1000ms ease-in-out')
      ])
    ]),
 
    //For the login form
    trigger('bounceInBottom', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        animate('2000ms 200ms ease-in', keyframes([
          style({transform: 'translate3d(0,2000px,0)', offset: 0}),
          style({transform: 'translate3d(0,-20px,0)', offset: 0.9}),
          style({transform: 'translate3d(0,0,0)', offset: 1}) 
        ]))
      ])
    ]),
 
    //For login button
    trigger('fadeIn', [
      state('in', style({
        opacity: 1
      })),
      transition('void => *', [
        style({opacity: 0}),
        animate('1000ms 2000ms ease-in')
      ])
    ])
  ]
  
})
export class LoginPage {   

  public email:string;
  public senha:string;

  logoState: any = "in";
  cloudState: any = "in";
  loginState: any = "in";
  formState: any = "in"; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public connectionService : ConnectionService,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private menuCtrl: MenuController
    ) {

      console.log('ionViewDidLoad LoginPage constructor');

    }

  // ionViewDidLoad2() {    
  //   //this.menuCtrl.enable(false);    
  //   //this.menuCtrl.open();

  //   console.log('ionViewDidLoad LoginPage');
  //   console.log(this.connectionService.getUser());

  //   if(this.connectionService.getUser()==null){
  //     console.log('Nullo aqui');
  //   }else{
  //     console.log('Logado');
  //     this.navCtrl.setRoot(HomePage);
  //     //this.navCtrl.push(HomePage);
  //   }    
  // }  

  buscaLoginUser():void{

    let loading = this.loadingCtrl.create({
      content: "Carregando...",
    });
    loading.present();

    this.connectionService.getLoginUser(this.email,this.senha)
      .then((resposta)=>{
        let json = resposta.json();
        console.log(json);        
        localStorage.setItem("usuarios", JSON.stringify(json));        
        loading.dismiss();
        this.navCtrl.setRoot(HomePage); 
        //this.navCtrl.push(HomePage);
      }).catch((erro)=>{
        loading.dismiss();
        console.log('Erro ao buscar o cep');
      });
  }

  ionViewCanEnter() : boolean {
    console.log('01');
    
    this.menuCtrl.enable(false, 'menuTopo1');
    this.menuCtrl.enable(false, 'menuTopo2');
    //this.menuCtrl.enable(false);    
    //this.menuCtrl.open();

    console.log('ionViewDidLoad LoginPage');
    console.log(this.connectionService.getUser());

    if(this.connectionService.getUser()==null){
      console.log('Nullo aqui');
    }else{
      console.log('Logado');
      this.navCtrl.setRoot(HomePage);
      //this.navCtrl.push(HomePage);
      
    } 

    return true; 
    
  }

  ionViewDidLoad() : void {
    console.log('02');
  }

  ionViewWillEnter() : void {
    console.log('03');
  }

  ionViewDidEnter() : void {
    console.log('04');
  }

  ionViewCanLeave() : boolean {
    console.log('5');
    return true;
  }

  ionViewWillLeave() : void {
    console.log('6');
  } 

  ionViewDidLeave() : void {
    console.log('7');
  }

  ionViewWillUnload() : void {
    console.log('8');
  }

  

  

  

}