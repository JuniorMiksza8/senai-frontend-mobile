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
  disponibilidade : string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
    this.initializeCategorias();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrosPage');
    
  }

  initializeItems(){
    let obj = {placa : 'QXE-9399',marca : 'Fiat',modelo : 'Uno',categoria : 'Carros',situacao : 'disponivel'};
    let obj2 = {placa : 'GJX-8740',marca : 'Honda',modelo : 'Titan',categoria : 'Motos',situacao : 'disponivel'};
    this.Items = [
      obj,
      obj2
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

  getCarsByCategoriaAndDisponiblidade(categoria : string){
    let items : Array<Veiculo> = this.Items; 
    let itemsOfCategoria : Array<Veiculo> = [];
    let disponibilidade = this.disponibilidade;
    items.forEach(function(value){  

      if(value.categoria.toLowerCase() == categoria.toLowerCase()){
        if(disponibilidade == value.situacao || disponibilidade == ''){
          itemsOfCategoria.push(value);
        }       
      }  

    });

    return itemsOfCategoria;
  }   

  setDisponiblidade(){
    
  }

}
