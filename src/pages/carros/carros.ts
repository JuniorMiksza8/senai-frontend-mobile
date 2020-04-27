import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, ModalController } from 'ionic-angular';
import { Veiculo } from '../../models/veiculo';
import { Categoria } from '../../models/categoria';
import { CarroService } from '../../services/carro.service';


@IonicPage()
@Component({
  selector: 'page-carros',
  templateUrl: 'carros.html',
})
export class CarrosPage {

  title : string;
  Items : Veiculo[] = [];
  Categoria : Categoria;
  disponibilidade : string = '';

  constructor(public navCtrl: NavController,public menu : MenuController,public navParams: NavParams,public carService : CarroService,public loadingControl : LoadingController,public modalController : ModalController ) {
    this.Categoria = this.navParams.get('Categoria');
    this.title = this.Categoria.nome;
  }

  ionViewDidLoad() { 
    this.initializeItems();
  }

  presentLoading(){
    let loader = this.loadingControl.create({
      content : 'Carregando...'
    });

    loader.present();

    return loader;
  }

  initializeItems(){
    this.Items = [];

    let objs : Veiculo[] = [];
    this.carService.list(this.Categoria.id).subscribe(response =>{
      objs = this.Items.concat(response);
      
      objs.filter((obj)=>{
        if(obj.disponibilidade == this.disponibilidade  || this.disponibilidade == ''){
          this.Items.push(obj);
        }
      })

      
    },error =>{
      console.log(error);

    });
  }

  
  profile(v : Veiculo){
    let modal = this.modalController.create('CarCreatedModalPage',{id : v.id_veiculo});
    modal.present();
  }
 

  

  next(){
    this.navCtrl.push('CadastroCarroPage');
  }

}
