
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController, LoadingController, AlertController, ToastController, NavController, MenuController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { IdeaService } from '../services/idea.service';


@Component({
  selector: 'app-registrog',
  templateUrl: './registrog.page.html',
  styleUrls: ['./registrog.page.scss'],
})
export class RegistrogPage   {
  registros = [];
  registrosg = [];
  loading: any;

  constructor(
    private router: Router,
  private afa: AngularFireAuth,
    private afs: AngularFirestore,
    private Modal: ModalController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private nav: NavController,
    private authService: AuthService,
    private ideaService: IdeaService,
    private menuCtrl: MenuController) {}

    pedido = {
      id : this.authService.getAuth().currentUser.uid,
      bairro: '',
      categoria: '',
      descricao: '',
      dia: '',
      data:'',
      protocolo:'',
      situacao:'',
      endereco: '',
      tipo:'',
      referencia: '',
    };
    ngOnInit() {
      var userId = this.authService.getAuth().currentUser.uid;
      
      this.ideaService.pegarDados(userId).subscribe(res => {
        
        this.registros = res;
        
      });
      var tipo = "Solicitacao";
      this.ideaService.pegargeral(tipo).subscribe(res => {
        
        this.registrosg = res;
        
      });
    }
    abrirmenu(){

      this.menuCtrl.toggle();
      //this.nav.navigateForward(['menu/'+this.pedido.id]);

    }
      entulho(){
        this.router.navigateByUrl("/remocao");
      }
      async deletar(data){
        const alert = await this.alertCtrl.create({
          header: 'Alerta',
          message: 'Deseja realmente deletar a solicitação? ' ,
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                
              }
            }, {
              text: 'Deletar',
              handler: () => {
     
       
               this.ideaService.deleteIdea(data);
    
                
    
              }
            }
          ]
        });
        alert.present();
    
      }
    verdetalhes(registro){

     this.nav.navigateForward(['meusregistros/'+this.pedido.id]);

    }
      async presentLoading() {
          
        this.loading = await this.loadingCtrl.create({ message: 'Aguarde ...' });
        return this.loading.present();
      }
      
      
      async presentToast(message: string) {
        const toast = await this.toastCtrl.create({ message, duration: 4000 });
        toast.present();
      }
}
