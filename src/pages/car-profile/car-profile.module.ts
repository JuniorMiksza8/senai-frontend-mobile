import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarProfilePage } from './car-profile';

@NgModule({
  declarations: [
    CarProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(CarProfilePage),
  ],
})
export class CarProfilePageModule {}
