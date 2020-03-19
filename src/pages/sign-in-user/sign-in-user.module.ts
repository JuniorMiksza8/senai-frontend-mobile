import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignInUserPage } from './sign-in-user';

@NgModule({
  declarations: [
    SignInUserPage,
  ],
  imports: [
    IonicPageModule.forChild(SignInUserPage),
  ],
})
export class SignInUserPageModule {}
