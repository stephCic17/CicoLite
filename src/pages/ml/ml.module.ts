import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MLPage } from './ml';

@NgModule({
  declarations: [
    MLPage,
  ],
  imports: [
    IonicPageModule.forChild(MLPage),
  ],
})
export class MLPageModule {}
