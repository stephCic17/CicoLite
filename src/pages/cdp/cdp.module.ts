import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CDPPage } from './cdp';

@NgModule({
  declarations: [
    CDPPage,
  ],
  imports: [
    IonicPageModule.forChild(CDPPage),
  ],
})
export class CDPPageModule {}
