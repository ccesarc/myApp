import { TabsPage } from './../pages/tabs/tabs';
import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { OverlayPage } from './../pages/overlay/overlay';
import { LoginPage } from './../pages/login/login';

import { ConnectionService } from './../providers/connection-service';

@Component({
  templateUrl: 'app.html',
  providers: [ConnectionService],
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  pages: Array<{title: string , component: any}> = [];
  rootPage = LoginPage;

  constructor(platform: Platform, public menuController: MenuController, public connectionService:ConnectionService) {

    this.pages = [
      {title: 'Home', component: HomePage},
      {title: 'Overlay', component: OverlayPage},   
      {title: 'TabsPage', component: TabsPage},
      {title: 'Sair', component: LoginPage},
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page:{title: string , component: any}):void{
    console.log('Aqui '+page.title);
    if(page.title=='Sair'){
      this.connectionService.logOutUser();
    }
    // this.rootPage = page.component;
    this.nav.setRoot(page.component);
    this.menuController.close();
  }
}