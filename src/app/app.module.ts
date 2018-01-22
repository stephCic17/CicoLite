import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { CGUPage } from '../pages/cgu/cgu';
import { WhyPage } from '../pages/why/why';
import { CDPPage } from '../pages/cdp/cdp';
import { MLPage } from '../pages/ml/ml';
import { ResultPage } from '../pages/result/result';
import { IvgInfoPage } from '../pages/ivg-info/ivg-info';
import { SQLitePage } from '../pages/sqlite/sqlite';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { Device } from '@ionic-native/device';
import { SQLite } from '@ionic-native/sqlite';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ResultPage,
    IvgInfoPage,
    SQLitePage,
    CGUPage,
    CDPPage,
    MLPage,
    WhyPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
     HomePage,
    ResultPage,
    IvgInfoPage,
    SQLitePage,
    CGUPage,
    CDPPage,
    MLPage,
    WhyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Device,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
 
  ]
})

export class AppModule {}
