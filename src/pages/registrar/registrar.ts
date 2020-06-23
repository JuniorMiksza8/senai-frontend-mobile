import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { UserService } from '../../services/user.service';


@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {


  user : any = {
    nome : '',
    email : '',
    telefone : '',
    cpf : '',
    cnh : ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,public userService : UserService,public alertCtrl : AlertController,public lodingControl : LoadingController) {
  }

  ionViewDidLoad() {
    
  }

  showAlert(msg : string) {
    const alert = this.alertCtrl.create({
      title: 'Cadastro',
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }
  
  cadastrar(){
    let load = this.loader();
    console.log(this.user);
    this.userService.create(this.user).subscribe(response =>{
      console.log(response);
      this.showAlert('Criado com sucesso');
      load.dismiss();
      this.navCtrl.pop();      
    },error=>{
      console.log(error);
      load.dismiss();
      this.showAlert('Erro ao cadastrar usuario');
    });
  }
  
  loader(){
    let load = this.lodingControl.create({
      content : 'Carregando...'
    });

    load.present();

    return load;
  }

}
