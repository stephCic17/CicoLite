var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ResultPage } from '../pages/result/result';
import { IvgInfoPage } from '../pages/ivg-info/ivg-info';
import { RetryPage } from '../pages/retry/retry';
import { SQLitePage } from '../pages/sqlite/sqlite';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { Device } from '@ionic-native/device';
import { SQLite } from '@ionic-native/sqlite';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                HomePage,
                ResultPage,
                IvgInfoPage,
                SQLitePage,
                RetryPage
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
                RetryPage
            ],
            providers: [
                StatusBar,
                SplashScreen,
                Device,
                SQLite,
                { provide: ErrorHandler, useClass: IonicErrorHandler },
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map