import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, AlertController, LoadingController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import { ConnectionService } from './../../providers/connection-service';
/*
  Generated class for the Overlay page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-overlay',
  templateUrl: 'overlay.html'
})
export class OverlayPage {

  public people: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public connectionService : ConnectionService
    ) {}

  ionViewDidLoad() {
    //this.presentLoading();
    console.log('ionViewDidLoad OverlayPage');
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  // presentLoading() {
  //   let loading = this.loadingCtrl.create({
  //     content: "Carregando...",
  //   });
  //   loading.present();

  //   setTimeout(() => {
  //     loading.dismiss();
  //   }, 1000);

  // }

  // presentModal() {
  //   let modal = this.modalCtrl.create(ModalPage);
  //   modal.present();
  // }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(ModalPage, characterNum);
    modal.present();
  }


  buscaLoginUser2( email:string,senha:string ):void
  {
    let loading = this.loadingCtrl.create({
      content: "Carregando...",
    });
    loading.present();

    this.connectionService.getLoginUser2(email,senha)
      .then((resposta)=>{
        let json = resposta.json()
        this.people = json.results;
        //console.log(json);
        loading.dismiss();
      }).catch((erro)=>{
        loading.dismiss();
        this.showAlert('Erro','Erro ao buscar usuários');
        console.log('Erro ao buscar o cep');
      });
  }

  mostrarPessoa(pessoa:string):void
  {
    //console.log(pessoa);
    //this.showAlert(pessoa,pessoa);
    let modal = this.modalCtrl.create(ModalPage, pessoa);
    modal.present();
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
