import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-generate-qr',
  templateUrl: 'generate-qr.html',
})
export class GenerateQrPage {

  Key : string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.Key = navParams.get('Key');

  }

  ionViewDidLoad() {
   
  }

}
