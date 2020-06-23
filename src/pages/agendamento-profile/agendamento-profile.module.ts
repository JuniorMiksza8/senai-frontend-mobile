import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgendamentoProfilePage } from './agendamento-profile';

@NgModule({
  declarations: [
    AgendamentoProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(AgendamentoProfilePage),
  ],
})
export class AgendamentoProfilePageModule {}
