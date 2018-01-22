import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ResultPage } from '../pages/result/result';
import { CGUPage } from '../pages/cgu/cgu';
import { Platform, Nav,NavController } from 'ionic-angular';
import { WhyPage } from '../pages/why/why';
import { CDPPage } from '../pages/cdp/cdp';
import { MLPage } from '../pages/ml/ml';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
@ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;

pages:Array<{title: string, component:any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openCGU()
  {
    this.nav.setRoot(CGUPage);
  }
  openML()
  {
    this.nav.setRoot(MLPage);
  }
  openCDP()
  {
    this.nav.setRoot(CDPPage);
  }
  openHome()
  {
    this.nav.setRoot(HomePage);
  }
  openWhy()
  {
    this.nav.setRoot(WhyPage);
  }
  openResult()
  {
    this.nav.setRoot(ResultPage);
  }
}

