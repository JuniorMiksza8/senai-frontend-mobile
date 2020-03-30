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

  title : string;
  Items : Array<Veiculo> = [];
  Categoria : Categoria;
  disponibilidade : number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
    this.Categoria = this.navParams.get('Categoria');
    this.title = this.Categoria.nome;
  }

  ionViewDidLoad() { 
    
  }

  initializeItems(){
    let obj = {placa : 'QXE-9399',marca : 'Fiat',modelo : 'Uno',categoria_id : 0,situacao : 1};
    let obj2 = {placa : 'GJX-8740',marca : 'Honda',modelo : 'Titan',categoria_id : 1,situacao : 1};
    let obj3 = {placa : 'PJG-5512',marca : 'Ford',modelo : 'Ka',categoria_id : 0,situacao : 2};
    let obj4 = {placa : 'GJH-2934',marca : 'Honda',modelo : 'Civic',categoria_id : 0,situacao : 3};
    this.Items = [
      obj,
      obj2,
      obj3,
      obj4
    ];
  }

  getCarsByCategoriaAndDisponiblidade(){
    let items : Array<Veiculo> = this.Items; 
    let itemsOfCategoria : Array<Veiculo> = [];
    let disponibilidade = this.disponibilidade;
    let Categoria = this.Categoria; 
    items.forEach(function(value){
      if(value.categoria_id == Categoria.id &&  (value.situacao == disponibilidade || disponibilidade == 0) ){
        itemsOfCategoria.push(value);
      }
    });
    return itemsOfCategoria;
  }   

  setDisponiblidade(){
    
  }

  getItems(ev: any) {
    this.initializeItems();

    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.Items = this.Items.filter((item) => {
        return (item.placa.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
