import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = 'CategoriasPage';
  tab3Root = 'AgendarPage';
  tab4Root = 'UsersPage';
  myIndex : number;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  

}
