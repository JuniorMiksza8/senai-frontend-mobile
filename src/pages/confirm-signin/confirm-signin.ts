import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Empresa = this.navParams.get('Empresa');
    this.Usuario = this.navParams.get('Usuario');
  }

  ionViewDidLoad() {
    
  }

  finish(){
    this.navCtrl.setRoot('HomePage');
  }
  
}
