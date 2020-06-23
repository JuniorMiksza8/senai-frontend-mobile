import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AgendamentoService } from '../../services/agendamento.service';

@IonicPage()
@Component({
  selector: 'page-agendamento-profile',
  templateUrl: 'agendamento-profile.html',
})
export class AgendamentoProfilePage {

  agendamento : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public agendamentoService : AgendamentoService,public modalCtrl : ModalController) {
  }

  ionViewWillLoad(){
    this.agendamento = this.navParams.get('agendamento');
  }
  
  checkout(){
    let modal = this.modalCtrl.create('RetornoModalPage',{id : this.agendamento.id_locacao});
    modal.present();
  }

}
