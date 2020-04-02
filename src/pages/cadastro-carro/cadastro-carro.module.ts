import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroCarroPage } from './cadastro-carro';
import { CarroService } from '../../services/carro.service';

@NgModule({
  declarations: [
    CadastroCarroPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroCarroPage),
  ]
})
export class CadastroCarroPageModule {}
