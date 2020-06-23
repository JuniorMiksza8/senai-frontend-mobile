import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgendamentoService } from '../../services/agendamento.service';


@IonicPage()
@Component({
  selector: 'page-agendamentos',
  templateUrl: 'agendamentos.html',
})
export class AgendamentosPage {

  agendamentos : any[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams,public agendamentoService : AgendamentoService) {

  }

  ionViewDidLoad() {
     this.agendamentoService.list().subscribe(response=>{
       console.log(response);
       this.agendamentos = response;
     },error=>{});
  }

  scan(){
    this.navCtrl.push('AgendarPage');
  }

  profile(obj : any){
    this.navCtrl.push('AgendamentoProfilePage',{agendamento : obj});
  }

  doRefresh(refresher){
    this.agendamentoService.list().subscribe(response=>{
      console.log(response);
      this.agendamentos = response;
    },error=>{});
    refresher.complete();
  }
}
