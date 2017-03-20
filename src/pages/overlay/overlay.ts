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

  
  public people_info: any;
  public page: any = '1';

  public items = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public connectionService : ConnectionService
    ) {
      console.log('ionViewDidLoad OverlayPage constructor');

      let loading = this.loadingCtrl.create({
      content: "Carregando...",
      });
      loading.present();

      this.connectionService.getLoginUser2('1','3')
        .then((resposta)=>{
          let json = resposta.json();          
          this.people_info = json.info;
          this.page = 1 + this.people_info.page

          for (let i = 0; i < json.results.length; i++) {
            this.items.push( json.results[i] );
          }  
                  
          loading.dismiss();
        }).catch((erro)=>{
          loading.dismiss();
          this.showAlert('Erro','Erro ao buscar usuários');
          console.log('Erro ao buscar o cep');
        });

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OverlayPage');
  } 

  openModal(characterNum)
  {
    let modal = this.modalCtrl.create(ModalPage, characterNum);
    modal.present();
  }  

  mostrarPessoa(pessoa:string):void
  {    
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

  doInfinite(infiniteScroll) {  

    this.connectionService.getLoginUser2(this.page,'3')
      .then((resposta)=>{
        let json = resposta.json()        
        this.people_info = json.info;
        this.page = 1 + this.people_info.page         

        for (let i = 0; i < json.results.length; i++) {
          this.items.push( json.results[i] );
        }

        infiniteScroll.complete();        
      }).catch((erro)=>{        
        this.showAlert('Erro','Erro ao buscar usuários');
        console.log('Erro ao buscar o cep');
      });

  }

}