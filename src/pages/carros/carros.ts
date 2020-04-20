import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController,public menu : MenuController,public navParams: NavParams,public carService : CarroService,public loadingControl : LoadingController ) {
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
    let loader = this.presentLoading();
    let objs : Veiculo[] = [];
    this.carService.list(this.Categoria.id).subscribe(response =>{
      objs = this.Items.concat(response);
      
      objs.filter((obj)=>{
        if(obj.disponibilidade == this.disponibilidade  || this.disponibilidade == ''){
          this.Items.push(obj);
        }
      })


      console.log(this.Items);
      loader.dismiss();
    },error =>{
      console.log(error);
      loader.dismiss();
    });
  }

  

 

  getItems(ev: any) {
    this.initializeItems();

    const val = ev.target.value;

    
    if (val && val.trim() != '') {
      this.Items = this.Items.filter((item) => {
        return (item.placa.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  next(){
    this.navCtrl.push('CadastroCarroPage');
  }

}
