import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  formGroup : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder : FormBuilder) {
    this.formGroup = this.formBuilder.group({
      razaoSocial : ['',[Validators.required]],
      cnpj : ['',[Validators.required,Validators.minLength(14),Validators.maxLength(14)]],
      cidade : ['',[Validators.required]],
      estado : ['',[Validators.required]],
      cep : ['',[Validators.required]],
      rua : ['',[Validators.required]],
      bairro : ['',[Validators.required]],
      email : ['',[Validators.required,Validators.email]]
    });
  }

  ionViewDidLoad() {
   
  }

  signUp(){
    console.log(this.formGroup.value);
  }

}
