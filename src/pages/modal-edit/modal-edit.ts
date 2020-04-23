import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Veiculo } from '../../models/veiculo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarroService } from '../../services/carro.service';


@IonicPage()
@Component({
  selector: 'page-modal-edit',
  templateUrl: 'modal-edit.html',
})
export class ModalEditPage {

  veiculo : Veiculo;
  formGroup : FormGroup;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl : ViewController,public formBuilder : FormBuilder,public carrosvc : CarroService,public toastCtrl : ToastController) {
    this.veiculo = this.navParams.get('veiculo');
    this.formGroup = this.formBuilder.group({
      placa : [this.veiculo.placa,[Validators.required,Validators.minLength(7),Validators.maxLength(7)]],
      modelo : [this.veiculo.modelo,[Validators.required]],
      marca : [this.veiculo.marca,[Validators.required]],
      ano : [this.veiculo.ano,[Validators.required]],
      cor : [this.veiculo.cor,[Validators.required]]
    });
  }

  ionViewDidLoad() {

  }

  finish(){

    this.veiculo.placa = this.formGroup.get('placa').value;
    this.veiculo.modelo = this.formGroup.get('modelo').value;
    this.veiculo.marca = this.formGroup.get('marca').value;
    this.veiculo.ano = this.formGroup.get('ano').value;
    this.veiculo.cor = this.formGroup.get('cor').value;


    this.carrosvc.edit(this.veiculo).subscribe(Response=>{
      console.log('as');
      let toast = this.toastCtrl.create({
        message : 'Alterado com sucesso',
        duration : 1500
      });
      toast.present();
      this.viewCtrl.dismiss();
    },error =>{
      let toast = this.toastCtrl.create({
        message : 'Falho ao alterar informações',
        duration : 1500
      });
      toast.present();
      this.viewCtrl.dismiss();
    });

    console.log(this.veiculo);
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
