import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroCarroPage } from './cadastro-carro';

@NgModule({
  declarations: [
    CadastroCarroPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroCarroPage),
  ],
})
export class CadastroCarroPageModule {}
