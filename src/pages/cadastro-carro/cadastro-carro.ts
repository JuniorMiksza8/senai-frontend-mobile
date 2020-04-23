import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, LoadingController, ToastController } from 'ionic-angular';
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
  
  constructor(public navCtrl: NavController,public carroService : CarroService, public navParams: NavParams,
    public formBuilder : FormBuilder,public alertCtrl : AlertController,private iab: InAppBrowser, private modalControl : ModalController,private loadingControl : LoadingController,
    public toastController : ToastController
    ) {

    this.formGroup = this.formBuilder.group({
      placa : ['555-EEE',[Validators.required]],
      km : ['1233',[Validators.required]],
      modelo : ['Civic',[Validators.required]],
      marca : ['Honda',[Validators.required]],
      categoria : ['1',[Validators.required]],
      ano : ['2001',[Validators.required]],
      situacao : ['1',[Validators.required]],
      cor : ['Branco',Validators.required],
      disponibilidade : ['1',[Validators.required]]
    });

  }

  ionViewDidLoad() {
    var categorias = [
      {id : '1',nome : 'Carros'},
      {id : '2',nome : 'Motos'},
      {id : '3',nome : 'Caminhoes'},
      {id : '4',nome : 'Van'},
      {id : '5',nome : 'Caminhonetes'}
    ];
    this.categorias = categorias;
  }

  finish(){
    let loader = this.presentLoading();
    this.carroService.create(this.formGroup.value).subscribe(response=>{
      loader.dismiss();
      this.showInsertOk('Veiculo registrado com sucesso');
      let obj = response.body;
      let id = JSON.parse(obj);
      this.showModal(id.id);
      this.navCtrl.pop();
    },error=>{
      loader.dismiss();
      this.showInsertOk('Falha ao registrar veiculo');
    });
    
  }

  presentLoading(){
    let loader = this.loadingControl.create({
      content : 'Cadastrando...'
    });

    loader.present();

    return loader;
  }

  

  showInsertOk(msg : string){
  
    const toast = this.toastController.create({
      message: msg,
      duration: 3000
    });
    toast.present();
    return toast;

  }

  showModal(id : string){

    let modal = this.modalControl.create('CarCreatedModalPage',{id : id});
    modal.present();
    return modal;  
  }

  back(){
    this.navCtrl.setRoot('CategoriasPage');
  }

  openURL(){
    this.iab.create(`${API_CONFIG.baseUrl}`);
    this.navCtrl.pop();
  }


}
