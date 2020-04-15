import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { Empresa } from '../../models/empresa';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../../models/usuario';
import { UserService } from '../../services/user.service';

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
  usuario : Usuario;

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder : FormBuilder,public userService : UserService,public toastCtrl : ToastController,public loadingControl : LoadingController) {
    this.formGroup = this.formBuilder.group({
      nome : ['teste',[Validators.required]],
      email : ['teste@gmail.com',[Validators.required,Validators.email]],
      telefone : ['199971481471',[Validators.required,Validators.minLength(11),Validators.maxLength(11)]],
      cnh : ['1823812812',[Validators.required,Validators.minLength(11),Validators.maxLength(11)]],
      cpf : ['1293912391',[Validators.required,Validators.minLength(11),Validators.maxLength(11)]]
    });
    
  }

  ionViewDidLoad() {
    this.Empresa = this.navParams.get('Empresa');
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

  next(){
    let Empresa = this.Empresa;
    let Usuario = this.formGroup.value;
    let loader = this.presentLoading();
    Usuario.idEmpresa = this.Empresa.idEmpresa;
        //Registra admin
        this.userService.create(Usuario).subscribe(response=>{
        loader.dismiss();
        this.presentToast('Cadastro realizado com sucesso!');
        this.navCtrl.setRoot('ConfirmSigninPage',{Empresa : Empresa,Usuario : Usuario});
      },error =>{
        loader.dismiss();
        let erro = JSON.parse(error.error);
        this.presentToast(erro.erro);
      });
  }

}
