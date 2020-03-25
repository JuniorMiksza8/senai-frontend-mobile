import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Veiculo } from '../../models/veiculo';
import { Categoria } from '../../models/categoria';


@IonicPage()
@Component({
  selector: 'page-carros',
  templateUrl: 'carros.html',
})
export class CarrosPage {

  Items : Array<Veiculo> = [];
  categorias : Array<Categoria> = [];
  disponibilidade : string = '1';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
    this.initializeCategorias();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrosPage');
    
  }

  initializeItems(){
    let obj = {placa : 'QXE-9399',marca : 'Fiat',modelo : 'Uno',categoria : 'Carros'};
    this.Items = [
      obj
    ];
  }

  initializeCategorias(){
    let obj1 = {id : 0,nome : 'Carros'};
    let obj2 = {id : 1,nome : 'Motos'};
    this.categorias = [
      obj1,
      obj2
    ];
  }

  getCarsByCategoria(categoria : string){
    let items : Array<Veiculo> = this.Items; 
    let itemsOfCategoria : Array<Veiculo> = [];
    items.forEach(function(value){
      if(value.categoria.toLowerCase() == categoria.toLowerCase()){
        itemsOfCategoria.push(value);       
      }    
    });
    return itemsOfCategoria;
  }   

  setDisponiblidade(){
    
  }

}
