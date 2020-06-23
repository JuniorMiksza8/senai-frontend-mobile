import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher } from 'ionic-angular';
import { Usuario } from '../../models/usuario';
import { UserService } from '../../services/user.service';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  items : Usuario[] = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public userService : UserService) {
  }

  ngOnInit(){
    this.load();
  }


  load(){
    this.userService.list().subscribe(response=>{
      console.log(response);
      this.items = response;
    },error=>{})
  }

  profile(item){
    this.navCtrl.push('ProfilePage',{user : item});
  }

  register(){
    this.navCtrl.push('RegistrarPage');
  }

  doRefresh(refresher){
    this.load();
    refresher.complete();
  }

}
