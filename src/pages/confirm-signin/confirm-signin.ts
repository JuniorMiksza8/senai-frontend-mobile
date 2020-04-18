import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { Empresa } from '../../models/empresa';
import { Usuario } from '../../models/usuario';


@IonicPage()
@Component({
  selector: 'page-confirm-signin',
  templateUrl: 'confirm-signin.html',
})
export class ConfirmSigninPage {

  Empresa : Empresa;
  Usuario : Usuario;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl : AlertController) {
    this.Empresa = this.navParams.get('Empresa');
    this.Usuario = this.navParams.get('Usuario');
  }

  ionViewDidLoad() {
    
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Primeiro acesso ',
      subTitle: 'Sua senha de acesso foi enviada por email',
      buttons: ['OK']
    });
    alert.present();
  }

  finish(){
    this.showAlert();
    this.navCtrl.setRoot('HomePage');
  }
  
}
