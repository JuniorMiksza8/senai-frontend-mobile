import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StorageService } from '../services/storage.service';
import { Usuario } from '../models/usuario';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'HomePage';

  pages: Array<{title: string, component: string}>;

  

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public menuController : MenuController,public storageService : StorageService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      //{ title: 'Home', component: 'HomePage' },
    ];
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
     
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  loadUser(){
    return this.storageService.getLocalUser();
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout(){
    this.storageService.setLocalUser(null);
    this.menuController.close();
    this.nav.setRoot('HomePage');
  }
}
