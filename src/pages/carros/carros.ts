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
  disponibilidade : string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
    this.Categoria = this.navParams.get('Categoria');
    this.title = this.Categoria.nome;
  }

  ionViewDidLoad() { 
    
  }

  initializeItems(){
    let obj = {placa : 'QXE-9399',marca : 'Fiat',modelo : 'Uno',categoria_id : 0,situacao : 'disponivel'};
    let obj2 = {placa : 'GJX-8740',marca : 'Honda',modelo : 'Titan',categoria_id : 1,situacao : 'disponivel'};
    this.Items = [
      obj,
      obj2
    ];
  }

  getCarsByCategoriaAndDisponiblidade(){
    let items : Array<Veiculo> = this.Items; 
    let itemsOfCategoria : Array<Veiculo> = [];
    let disponibilidade = this.disponibilidade;
    let Categoria = this.Categoria; 
    items.forEach(function(value){
      if(value.categoria_id == Categoria.id &&  (value.situacao == disponibilidade || disponibilidade == '') ){
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
