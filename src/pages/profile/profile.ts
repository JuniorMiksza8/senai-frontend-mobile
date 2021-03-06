import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Usuario } from '../../models/usuario';
import { StorageService } from '../../services/storage.service';
import { UserService } from '../../services/user.service';
import { API_CONFIG } from '../../config/api.config';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user : Usuario;

  constructor(public navCtrl: NavController, public navParams: NavParams,public storageService : StorageService,public userService : UserService,public toastCtrl : ToastController) {

  }

  ionViewWillLoad() {
    if(this.navParams.get('user')){
      var temp = this.navParams.get('user');
      console.log(temp);
      this.userService.find(temp.id_func).subscribe(response =>{
        this.user = response;
        console.log(this.user);
      },error =>{console.log(error)});
    }else{
      this.user = this.storageService.getLocalUser();
    }
  }

  delete(){
    this.userService.delete(this.user.id_func).subscribe(response=>{
      this.navCtrl.pop();
      let toast = this.toastCtrl.create({
        message : 'Alterado com sucesso',
        duration : 1500
      });
      toast.present();
    },error=>{
      let toast = this.toastCtrl.create({
        message : error.error.erro,
        duration : 1500
      });
      toast.present();
    });
  }

  pdf(){
    window.open(`${API_CONFIG.baseUrl}/barcode?id=${this.user.id_func}&tipo=2`, '_system', 'location=yes');
  }
  
}
