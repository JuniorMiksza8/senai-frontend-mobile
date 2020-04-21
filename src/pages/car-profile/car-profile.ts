import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Veiculo } from '../../models/veiculo';


@IonicPage()
@Component({
  selector: 'page-car-profile',
  templateUrl: 'car-profile.html',
})
export class CarProfilePage {

  v : Veiculo;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.v = this.navParams.get('veiculo');
  }

  ionViewDidLoad(){
    
  }

  

}
