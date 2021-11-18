import { AuthService } from 'src/app/services/auth.service';

import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-senha',
  templateUrl: './senha.page.html',
  styleUrls: ['./senha.page.scss'],
})
export class SenhaPage implements OnInit {
  user = {
    email: '',
  }
  loading: HTMLIonLoadingElement;
  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
  ) { }

  ngOnInit() {
  }

  async esquecisenha(){
  
          try {
            await this.presentLoading();
        await this.authService.esqueceusenha(this.user.email)
        .then(()=>{
          let message: string;
          message = ' Mensagem Enviada com sucesso, verifique seu email!';
          this.presentToast(message);
        })
 
      } catch (error) {
        let message: string;
        message = ' Erro ao enviar mensagem !';
        this.presentToast(message);
      }
      finally {
        this.loading.dismiss();
      }
    }
    
    async presentLoading() {
      
      this.loading = await this.loadingCtrl.create({ message: 'Aguarde enviando E-mail de confirmação...' });
      return this.loading.present();
    }
    
   
    async presentToast(message: string) {
      const toast = await this.toastCtrl.create({ message, duration: 3000 });
      toast.present();
    }
   
}
