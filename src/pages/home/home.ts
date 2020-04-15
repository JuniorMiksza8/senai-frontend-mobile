import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController, LoadingController, ToastController } from 'ionic-angular';
import { Credenciais } from '../../models/auth.credentials';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../models/usuario';
import { StorageService } from '../../services/storage.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds : Credenciais = {
    cpf : "",
    senhaAcesso : ""
  };

  usuario : Usuario;

  constructor(public navCtrl: NavController,public menu : MenuController,public authService : AuthService,public storageService : StorageService,public loadingControl : LoadingController,public toastCtrl: ToastController) {

  }

  ionViewWillEnter(){
    this.menu.swipeEnable(false);
  }

  
  ionViewWillLoad(){

    if(this.storageService.getLocalUser() != null){
      this.navCtrl.setRoot('TabsPage');
    }

  }

  ionViewDidLeave(){
    this.menu.swipeEnable(true);
  }
  
  presentLoading(){
    let loader = this.loadingControl.create({
      content : 'Autenticando...'
    });

    loader.present();

    return loader;
  }

  login(){
    let loader = this.presentLoading();
    this.authService.login(this.creds).subscribe(response =>{
      this.usuario = response;
      this.storageService.setLocalUser(this.usuario);
      this.navCtrl.setRoot('TabsPage');
      this.presentToast('Usuario logado com sucesso');
      loader.dismiss(); 
    },error =>{
      console.log(error);
      let toast = this.presentToast('Falha ao efetuar login');
      loader.dismiss();
    });
  }

  presentToast(message : string) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
    return toast;
  }

  signIn(){
    this.navCtrl.push('SigninPage');
  }
}
