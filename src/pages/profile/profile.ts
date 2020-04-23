import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../models/usuario';
import { StorageService } from '../../services/storage.service';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user : Usuario;

  constructor(public navCtrl: NavController, public navParams: NavParams,public storageService : StorageService) {

  }

  ionViewWillLoad() {
    this.user = this.storageService.getLocalUser();
  }



}
