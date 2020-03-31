import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmSigninPage } from './confirm-signin';

@NgModule({
  declarations: [
    ConfirmSigninPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmSigninPage),
  ],
})
export class ConfirmSigninPageModule {}
