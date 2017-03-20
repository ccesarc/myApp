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
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OverlayPage,
    ModalPage,
    LoginPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
