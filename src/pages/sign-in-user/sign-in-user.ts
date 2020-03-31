import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Empresa } from '../../models/empresa';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the SignInUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in-user',
  templateUrl: 'sign-in-user.html',
})
export class SignInUserPage {

  Empresa : Empresa;
  formGroup : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder : FormBuilder) {
    this.formGroup = this.formBuilder.group({
      nome : ['teste',[Validators.required]],
      email : ['teste@gmail.com',[Validators.required,Validators.email]],
      telefone : ['199971481471',[Validators.required]],
      cnh : ['1823812812',[Validators.required]],
      cpf : ['1293912391',[Validators.required]]
    });
    
  }

  ionViewDidLoad() {
    this.Empresa = this.navParams.get('Empresa');
    
  }

  next(){
    let Empresa = this.Empresa;
    let Usuario = this.formGroup.value;
    this.navCtrl.push('ConfirmSigninPage',{Empresa : Empresa,Usuario : Usuario});
  }

}
