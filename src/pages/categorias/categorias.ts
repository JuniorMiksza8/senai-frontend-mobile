import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Categoria } from '../../models/categoria';



@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  Categorias : Array<Categoria> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.loadCategorias();
  }

  ionViewDidLoad() {
    
  }


  loadCategorias(){
    var categorias = [
      {id : 0,nome : 'Carros'},
      {id : 1,nome : 'Motos'},
      {id : 2,nome : 'Caminhoes'},
      {id : 3,nome : 'Van'},
      {id : 4,nome : 'Caminhonetes'}
    ];
    this.Categorias = categorias;
  }

  showVeiculo(Categoria : Categoria){
    this.navCtrl.push('CarrosPage',{Categoria : Categoria});
  }

}
