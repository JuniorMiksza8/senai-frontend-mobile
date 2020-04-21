import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../models/usuario';
import { StorageService } from '../../services/storage.service';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user : Usuario;

  constructor(public navCtrl: NavController, public navParams: NavParams,public storageService : StorageService,private qrScanner: QRScanner) {

  }

  ionViewWillLoad() {
    this.user = this.storageService.getLocalUser();
  }



}
