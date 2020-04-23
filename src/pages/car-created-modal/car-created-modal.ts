import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, LoadingController, AlertController, ToastController, ModalController } from 'ionic-angular';
import { Veiculo } from '../../models/veiculo';
import { CarroService } from '../../services/carro.service';



@IonicPage()
@Component({
  selector: 'page-car-created-modal',
  templateUrl: 'car-created-modal.html',
})
export class CarCreatedModalPage {

  veiculo : Veiculo;
  
  constructor(private vc : ViewController, public navParams: NavParams,public toastCtrl : ToastController,
    public carroService : CarroService,public lodingControl : LoadingController,public alertCtrl : AlertController,public modalCtrl : ModalController
    ) {


    
    

  }

  ionViewWillLoad() {
    
    let id = this.navParams.get('id');
    
    let load = this.loader();
    this.carroService.read(id).subscribe(response=>{   
      this.veiculo = response;
      load.dismiss();
    },error=>{
      console.log(error);
      load.dismiss();
    });
   

  }

  deleteFunc(){
    this.carroService.delete(this.veiculo.id_veiculo).subscribe(response =>{
      this.notificate('Veiculo deletado com sucesso');
      this.fechar();
    },error =>{
      if(error.status == 400){
        this.notificate('Apenas veiculos recem criados podem ser excluidos');
      }else{
        this.notificate('Erro ao deletar');
      }
    });
  }


  
  delete() {
    let alert = this.alertCtrl.create({
      title: 'Confirme exclusão',
      message: 'Deseja deletar este veiculo?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
          }
        },
        {
          text: 'Excluir',
          handler: () => {
            this.deleteFunc();
          }
        }
      ]
    });
    alert.present();
  }

  edit(){
    let modal = this.modalCtrl.create('ModalEditPage',{veiculo : this.veiculo});
    modal.present();
  }
  
  notificate(msg : string){
    let toast = this.toastCtrl.create({
      message : msg,
      duration : 1500
    });
    
    toast.present();

    return toast;
  }

  loader(){
    let load = this.lodingControl.create({
      content : 'Carregando...'
    });

    load.present();

    return load;
  }

  fechar(){
    this.vc.dismiss();
  }

}
