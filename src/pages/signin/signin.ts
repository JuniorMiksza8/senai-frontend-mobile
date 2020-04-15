import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empresa } from '../../models/empresa';
import { EmpresaService } from '../../services/empresa-service';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder : FormBuilder,public empresaService : EmpresaService,public toastCtrl : ToastController,public loadingControl : LoadingController) {
    this.formGroup = this.formBuilder.group({
      razaoSocial : ['teste',[Validators.required]],
      cnpj : ['41963011000154',[Validators.required,Validators.minLength(14),Validators.maxLength(14)]],
      cidade : ['Jaguariuna',[Validators.required]],
      cep : ['13920000',[Validators.required]],
      rua : ['Maranhão',[Validators.required]],
      bairro : ['Lot São Pedro',[Validators.required]],
      numero : ['203',[Validators.required]],
      email : ['teste@gmail.com',[Validators.required,Validators.email]]
    });
  }

  ionViewDidLoad() {
   
  }

  presentToast(message : string) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
    return toast;
  }

  presentLoading(){
    let loader = this.loadingControl.create({
      content : 'Cadastrando...'
  });

    loader.present();

    return loader;
  }


  signUp(){
    this.Empresa = this.formGroup.value;
    let loader = this.presentLoading();
    //Registra Empresa
    this.empresaService.create(this.Empresa).subscribe(response=>{
      var array = JSON.parse(response.body);
      this.Empresa.idEmpresa = array.id_empresa;  
      console.log(this.Empresa.idEmpresa);
      this.navCtrl.push('SignInUserPage',{Empresa : this.Empresa});
      loader.setContent('OK');
      loader.dismiss();
    },error =>{
      console.log(error);
      loader.dismiss();
      let erro = JSON.parse(error.error);
      console.log(erro);
      this.presentToast(erro.erro);
    })
  }

}
