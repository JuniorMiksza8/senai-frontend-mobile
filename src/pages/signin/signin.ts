import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empresa } from '../../models/empresa';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  Empresa : Empresa;
  formGroup : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder : FormBuilder) {
    this.formGroup = this.formBuilder.group({
      razaoSocial : ['teste',[Validators.required]],
      cnpj : ['41963011000154',[Validators.required,Validators.minLength(14),Validators.maxLength(14)]],
      cidade : ['Jaguariuna',[Validators.required]],
      estado : ['SP',[Validators.required]],
      cep : ['13920-000',[Validators.required]],
      rua : ['Maranhão',[Validators.required]],
      bairro : ['Lot São Pedro',[Validators.required]],
      numero : ['203',[Validators.required]],
      email : ['teste@gmail.com',[Validators.required,Validators.email]]
    });
  }

  ionViewDidLoad() {
   
  }

  signUp(){
    this.Empresa = this.formGroup.value;
    this.navCtrl.push('SignInUserPage',{Empresa : this.Empresa});
  }

}
