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

  constructor(public navCtrl: NavController, public navParams: NavParams,public formGroup : FormGroup,public formBuilder : FormBuilder) {
    this.formGroup = this.formBuilder.group({
      
    });
    
  }

  ionViewDidLoad() {
    this.Empresa = this.navParams.get('Empresa');
    
  }

  signUp(){
    
  }

}
