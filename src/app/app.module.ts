import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CarroService } from '../services/carro.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { EmpresaService } from '../services/empresa-service';
import { UserService } from '../services/user.service';
import { QRCodeModule } from 'angularx-qrcode';
import { QRService } from '../services/qr.service';
import { QRScanner } from '@ionic-native/qr-scanner';
import { AgendamentoService } from '../services/agendamento.service';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    QRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CarroService,
    AuthService,
    StorageService,
    EmpresaService,
    UserService,
    InAppBrowser,
    QRService,
    QRScanner,
    AgendamentoService
  ]
})
export class AppModule {}
