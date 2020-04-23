import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarCreatedModalPage } from './car-created-modal';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [
    CarCreatedModalPage,
  ],
  imports: [
    IonicPageModule.forChild(CarCreatedModalPage),
    QRCodeModule
  ],
})
export class CarCreatedModalPageModule {}
