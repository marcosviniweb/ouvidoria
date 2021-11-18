import { Solicitacao } from './../interfaces/solicitacao';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController, LoadingController, ToastController, NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { IdeaService } from '../services/idea.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';


declare var google;

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {
  loading: any;
  public pedido: Solicitacao = {};
  public protocolo: String = null;
  registros = [];
  map: any;


  constructor(  private afa: AngularFireAuth,
    private afs: AngularFirestore,
    private Modal: ModalController,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private activeRoute: ActivatedRoute,
    private nav: NavController,
    private geolocation: Geolocation,


    private ideaService: IdeaService) {


     }


  ngOnInit() {

    let id = this.activeRoute.snapshot.paramMap['id'];
    this.activeRoute.paramMap.subscribe(params => {
     let protocolo = params.get('protocolo');
     let latitude = params.get('latitude');
     let longitude = params.get('longitude');

     console.log(latitude);
     console.log(longitude);
    console.log(protocolo);
    this.ideaService.pegarDetalhes(protocolo).subscribe(res => {

      this.registros = res;

    });





    })
  }


  async mostrarmapa(){

  var div = document.getElementById('map')
  /* se conteúdo está escondido, mostra e troca o valor do botão para: esconde */


   div.style.display = 'block'
   await this.presentLoading();

   try {

  let id = this.activeRoute.snapshot.paramMap['id'];
    this.activeRoute.paramMap.subscribe(params => {
    // let protocolo = params.get('protocolo');
     let latitude = params.get('latitude');
     let longitude = params.get('longitude');

     console.log(latitude);
     console.log(longitude);
    //console.log(protocolo);


   let latLng = new google.maps.LatLng(latitude,longitude);


   this.map = new google.maps.Map(document.getElementById('map'), {
       zoom: 18,
       center: latLng,
       mapTypeId: google.maps.MapTypeId.ROADMAP,
       mapTypeControl: false,
       zoomControl: false,
       streetViewControl: false,
       title: 'Voce está aqui!'
     });

   const icon = {
     url: './assets/imagens/gps.png',

   };

     new google.maps.Marker({
       map: this.map,
       position: latLng,
     icon: icon,
       title: 'Voce está aqui!'
     });


    })

  }catch (error) {

    }
    finally {
      this.loading.dismiss();
    }
  }
  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde é carregado...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 3000 });
    toast.present();
  }
}
