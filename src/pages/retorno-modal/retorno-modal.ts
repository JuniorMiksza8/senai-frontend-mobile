import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { AgendamentoService } from '../../services/agendamento.service';

@IonicPage()
@Component({
  selector: 'page-retorno-modal',
  templateUrl: 'retorno-modal.html',
})
export class RetornoModalPage {

  km : any;
  id : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public agendamentoService : AgendamentoService,public toastCtrl : ToastController,public viewCtrl : ViewController) {
  }

  ionViewWillLoad(){
    this.id = this.navParams.get('id');
  }

  checkout(){
    this.agendamentoService.checkout(this.id,this.km).subscribe(response =>{
      let toast = this.toastCtrl.create({
        message : 'Veiculo retornado com sucesso',
        duration : 1500
      });
      toast.present();
      this.viewCtrl.dismiss();
    },error =>{
      console.log(error);
      this.viewCtrl.dismiss();
    });
  }

  dismiss(){
    this.viewCtrl.dismiss();
    return true;
  }

  

}
