import { SobrePage } from './../pages/sobre/sobre';
import { TabsPage } from './../pages/tabs/tabs';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OverlayPage } from './../pages/overlay/overlay';
import { ModalPage } from './../pages/modal/modal';
import { LoginPage } from './../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OverlayPage,
    ModalPage,
    LoginPage,
    TabsPage,
    SobrePage
  ],
  imports: [
    IonicModule.forRoot(MyApp,{
      // mode: 'md',
      // menuType: 'reveal',
      platforms: {
        ios: {
           menuType: 'reveal',
        },
        android : {
          menuType: 'overlay',
        },
        windows : {
          menuType: 'push',
        },
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OverlayPage,
    ModalPage,
    LoginPage,
    TabsPage,
    SobrePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
