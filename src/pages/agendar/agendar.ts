import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { agendamento } from '../../models/agendamento';
import { AgendamentoService } from '../../services/agendamento.service';

@IonicPage()
@Component({
  selector: 'page-agendar',
  templateUrl: 'agendar.html',
})
export class AgendarPage {

  data : agendamento = {
    id_func : '',
    id_veiculo : '',
    origem : '',
    destino : '',
    km_saida : 0,
    km_chegada : 0
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public qrScanner: QRScanner,public toastController : ToastController,public agendamentoService : AgendamentoService ) {

  }

  ionViewDidLoad() {
    
  }

   funcionario(){

    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          this.qrScanner.show();
          document.getElementsByTagName("body")[0].style.opacity = '0';
          let scan = this.qrScanner.scan().subscribe((key)=>{
            document.getElementsByTagName("body")[0].style.opacity = '1';
            scan.unsubscribe();
            this.data.id_func = key;
            this.notificacao('Funcionario encontrado');
          },(err)=>{
            console.log(err);
            this.notificacao('erro');
          })

        } else if (status.denied) {
        
        } else {
          
        }
      })
      .catch((e: any) => console.log('Error is', e));

   }

   veiculo(){

    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          this.qrScanner.show();
          document.getElementsByTagName("body")[0].style.opacity = '0';
          let scan = this.qrScanner.scan().subscribe((key)=>{
            document.getElementsByTagName("body")[0].style.opacity = '1';
            scan.unsubscribe();
            this.data.id_veiculo = key;
            this.notificacao('Veiculo encontrado');
          },(err)=>{
            console.log(err);
            this.notificacao('erro');
          })

        } else if (status.denied) {
        
        } else {
          
        }
      })
      .catch((e: any) => console.log('Error is', e));

   }


   cadastrar(){
     this.agendamentoService.create(this.data).subscribe(response=>{
       this.notificacao('Agendado com sucesso');
       this.navCtrl.pop();
     },error=>{
      this.notificacao('Erro ao agendar');
     })
   }
   

  notificacao(msg : string){
    const toast = this.toastController.create({
      message: msg,
      duration: 3000
    });
    toast.present();
    return toast;
  }

}
