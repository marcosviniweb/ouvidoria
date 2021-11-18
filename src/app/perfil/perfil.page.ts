import { ServicesService, User } from './../services.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { IdeaService } from '../services/idea.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})

export class PerfilPage {
  dados = [];
  loading: any;
  usuar = {
    id: this.authService.getAuth().currentUser.uid,
    nome: '',
    password: '',
    email: '',
    cpf: '',
    telefone: '',
    criacao: '',


  }

  private ideas: Observable<User[]>;
  private user = new Array<User>();

  constructor(

    private ideaService: IdeaService,
    private activeRoute: ActivatedRoute,
    private usuario: ServicesService,
    private afa: AngularFireAuth,
    private afs: AngularFirestore,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private nav: NavController,

  ) { }

  ngOnInit() {

    var userId = this.authService.getAuth().currentUser.uid;

    console.log(userId);
    this.usuario.pegarDados(userId).subscribe(res => {

      this.dados = res;
      console.log(this.dados = res);

    });




  }

  async atualizar(cpf, nome, telefone, email) {

    await this.presentLoading();

    try {
      if (cpf) {
        this.usuario.pegarDadosatualizar(cpf, nome, telefone, email);
        let message: string;
        message = 'Perfil Atualizado !';
        this.presentToast(message);
        this.nav.navigateForward(['home/']);
      }
    } catch (error) {
      console.error(error);
      let message: string;
      message = 'Erro ao atualizar!';
      this.presentToast(message);
    }
    finally {
      this.loading.dismiss();
    }


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
