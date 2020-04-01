import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categoria } from '../../models/categoria';



@IonicPage()
@Component({
  selector: 'page-cadastro-carro',
  templateUrl: 'cadastro-carro.html',
})
export class CadastroCarroPage {

  formGroup : FormGroup;
  categorias : Array<Categoria> = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder : FormBuilder ) {
    this.formGroup = this.formBuilder.group({
      placa : ['',[Validators.required]],
      km : ['',[Validators.required]],
      modelo : ['',[Validators.required]],
      marca : ['',[Validators.required]],
      categoria : ['',[Validators.required]],
      ano : ['',[Validators.required]],
      situacao : ['',[Validators.required]]
    });
  }

  ionViewDidLoad() {
    var categorias = [
      {id : 0,nome : 'Carros'},
      {id : 1,nome : 'Motos'},
      {id : 2,nome : 'Caminhoes'},
      {id : 3,nome : 'Van'},
      {id : 4,nome : 'Caminhonetes'}
    ];
    this.categorias = categorias;
  }

  next(){
    this.navCtrl.push('GenerateQrPage',{Key : '0183282138'});
  }

}
