import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categoria } from '../../models/categoria';
import { CarroService } from '../../services/carro.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { API_CONFIG } from '../../config/api.config';


@IonicPage()
@Component({
  selector: 'page-cadastro-carro',
  templateUrl: 'cadastro-carro.html',
})
export class CadastroCarroPage {

  formGroup : FormGroup;
  categorias : Array<Categoria> = [];
  
  constructor(public navCtrl: NavController,public carroService : CarroService, public navParams: NavParams,public formBuilder : FormBuilder,public alertCtrl : AlertController,private iab: InAppBrowser ) {
    this.formGroup = this.formBuilder.group({
      placa : ['555-EEE',[Validators.required]],
      km : ['1233',[Validators.required]],
      modelo : ['Civic',[Validators.required]],
      marca : ['Honda',[Validators.required]],
      categoria : ['',[Validators.required]],
      ano : ['2001',[Validators.required]],
      situacao : ['',[Validators.required]]
    });
  }

  ionViewDidLoad() {
    var categorias = [
      {id : '0',nome : 'Carros'},
      {id : '1',nome : 'Motos'},
      {id : '2',nome : 'Caminhoes'},
      {id : '3',nome : 'Van'},
      {id : '4',nome : 'Caminhonetes'}
    ];
    this.categorias = categorias;
  }

  finish(){
    /*
    this.carroService.create(this.formGroup.value).subscribe(response=>{
      this.showInsertOk('Carro cadastrado com sucesso','OK');
    },error=>{
      this.showInsertOk('Falha ao registrar veiculo,tente novamente mais tarde.','Erro');
    });
    */
   this.showInsertOk('Carro cadastrado com sucesso','OK');
  }

  showInsertOk(msg : string,title : string){
    let alert = this.alertCtrl.create({
      title : title,
      message : msg,
      enableBackdropDismiss : false,
      buttons: [
        {
          text : 'Ok',
          handler : ()=>{
            this.navCtrl.pop();
          }
        },
        {
          text : 'Ver QRCode',
          handler : ()=>{
            this.openURL();
          }
        }
      ]
    });
    alert.present();
  }

  back(){
    this.navCtrl.setRoot('CategoriasPage');
  }

  openURL(){
    this.iab.create(`${API_CONFIG.baseUrl}`);
    this.navCtrl.pop();
  }
}
