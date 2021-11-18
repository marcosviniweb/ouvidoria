import { Solicitacao } from './../interfaces/solicitacao';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Idea } from '../services/idea.service';
import { ModalController, LoadingController, ToastController, NavController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AngularFireStorage } from '@angular/fire/storage';

import { storage } from 'firebase';
import * as firebase from 'firebase';
declare var google;

@Component({
  selector: 'app-educacao',
  templateUrl: './educacao.page.html',
  styleUrls: ['./educacao.page.scss'],
})
export class EducacaoPage implements OnInit {
  photo: any;

  pedido = {
    id: this.authService.getAuth().currentUser.uid,
    bairro: '',
    categoria: '',
    descricao: '',
    dia: '',
    data: '',
    protocolo: '',
    situacao: '',
    endereco: '',
    latitude: '',
    longidade: '',
    tipo: '',
    referencia: '',
    mapa: '',
  };


  map: any;
  private ideas: Observable<Idea[]>;
  loading: any;
  public lat: number;
  public log: number;

  imagem: any;
  downloadURL: any;
  numero: any;
  protocolo: any;
  constructor(private authService: AuthService,
    private afa: AngularFireAuth,
    private afs: AngularFirestore,
    private Modal: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private nav: NavController,
    private geolocation: Geolocation,
    private camera: Camera,

   

  ) {
    // deixando o campo obrigatorio

    
  }




  //PEGANDO AS COORDENADAS DO GPS AUTOMATICAMENTE
 
  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      
      this.lat = resp.coords.latitude;
      this.log = resp.coords.longitude;
      console.log(this.lat);
      console.log(this.log);
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let latLng = new google.maps.LatLng(this.lat, this.log);


    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
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

    // CRIANDO O NUMERO DE PROTOCOLO DO PEDIDO
    this.numero = Math.floor(Math.random() * 100000).toString();
    this.protocolo = "CID-" + this.numero;
    console.log(this.protocolo);

  }

  // MOSTRANDO MAPA

  mostrarmapa() {
    var div = document.getElementById('map')
    /* se conteúdo está escondido, mostra e troca o valor do botão para: esconde */
    if (div.style.display == 'none') {

      div.style.display = 'block'
    }
    let latLng = new google.maps.LatLng(this.lat, this.log);


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
      url: 'assets/imagens/icon/icon3.png',

    };

    new google.maps.Marker({
      map: this.map,
      position: latLng,
      icon: icon,
      title: 'Voce está aqui!'
    });
  }


  // FAZENDO SOLICITAÇÃO 

  solicitacao(pedido) {

    // ACEITAR SOMENE CAMPOS PREENCHIDOS

    if(this.pedido.descricao != '' && this.pedido.bairro != '' && this.pedido.endereco != '' && this.pedido.referencia){

   

      let data = new Date();
      let dataid = data.toString();
      let dia = data.getDate().toString();
      // PEGANDO LATITUDE E LONGITUDE DO GPS E COLOCANDO 
      let mapa = (this.lat + "," + this.log).toString();
      // PEGEGANDO O LINK DA IMG PARA ENVIAR PARA O BANCO DE ACORDO COM  O PROTOCOLO
      let img = `https://firebasestorage.googleapis.com/v0/b/app-prefeitura.appspot.com/o/Educacao%2F${this.protocolo}?alt=media`;
      this.pedido.situacao = "Aberto";
      // COLOCANDO O TIPO DE CATEGORIA DO PEDIDO
      this.pedido.categoria = "Secretaria de Educação";
      this.pedido.tipo = "Solicitacao";
      let longitude = this.log;
      // INSERINDO NO BANCO DE DADOS  OS DADOS 
      this.afs.collection<Idea>("Solicitacoes/")
        .doc(dataid).set(
          {
            img: img, latitude: this.lat, mapa: mapa, longitude: longitude, id: this.pedido.id, tipo: this.pedido.tipo, protocolo: this.protocolo, situacao: this.pedido.situacao, data: dataid, dia: dia, categoria: this.pedido.categoria, bairro: this.pedido.bairro, descricao: this.pedido.descricao,
            endereco: this.pedido.endereco, referencia: this.pedido.referencia
          },
        )
  
      console.log(this.pedido);
      console.log("Pedido Enviado");
      let message: string;
      message = ' Solicitação feita com sucesso, verifique em "Meus Registros" para visualisar os detalhes!!';
      this.presentToast(message);
      

      // ZERANDO OS CAMPOS APÓS O ENVIO DO FORM

      this.pedido.bairro = null;
      this.pedido.descricao = null;
      this.pedido.endereco = null;
      this.pedido.referencia = null;
      // MOSTRANDO O MAPA QUE ESTAVA OCULTO

      var div = document.getElementById('map')
      /* se conteúdo está escondido, mostra e troca o valor do botão para: esconde */
      if (div.style.display == 'block') {
  
        div.style.display = 'none'
      }
     // this.nav.navigateForward(['home/']);
    }else{
      let message: string;
      message = ' Existe campos em branco, por favor preencha todos os campos! Ou verifique sua internet';
      this.presentToast(message);
   
  }
  }




  async presentLoading() {

    this.loading = await this.loadingCtrl.create({ message: 'Aguarde ...' });
    return this.loading.present();
  }


  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 5000 });
    toast.present();
  }

  //tirar foto
  async tirarFoto() {
    const options: CameraOptions = {
      quality: 100,
      targetHeight: 600,
      targetWidth: 400,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true

    }

    let result = await this.camera.getPicture(options)
    let imagem = `data:image/jpeg;base64,${result}`;


    //Enviar IMG para o storage
    let pictures = storage().ref(`Educacao/${this.protocolo}`);
    let envio = pictures.putString(imagem, 'data_url');

    envio.on('state_changed', (snapshot) => {

      console.log(snapshot);

      var progress = (envio.snapshot.bytesTransferred / envio.snapshot.totalBytes) * 100;



      let message: string;
      message = ('Envio ' + progress + '% Concluído');
      this.presentToast(message);

      switch (envio.snapshot.state) {
        case firebase.storage.TaskState.PAUSED:   // or Paused
          console.log('upLoad is paused');
          break;

        case firebase.storage.TaskState.RUNNING:   // OR Running
          console.log('upload is running');
          break;

      }

    }, (error) => {
      console.log(error);

    }

    )}

    
  //Escolher Foto no Album
  async escolher_foto() {
    var div = document.getElementById('galeria')
    /* se conteúdo está escondido, mostra e troca o valor do botão para: esconde */
    if (div.style.display == 'none') {

      div.style.display = 'block'
    }
    const options: CameraOptions = {
      quality: 100,
      targetHeight: 600,
      targetWidth: 400,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      correctOrientation: true,
      allowEdit: true


    }

    let result = await this.camera.getPicture(options)
    let imagem = `data:image/jpeg;base64,${result}`;
    this.photo = imagem;

    //Enviar IMG para o storage
    let pictures = storage().ref(`Educacao/${this.protocolo}`);
    let envio = pictures.putString(imagem, 'data_url');

    envio.on('state_changed', (snapshot) => {

      console.log(snapshot);

      var progress = (envio.snapshot.bytesTransferred / envio.snapshot.totalBytes) * 100;



      let message: string;
      message = ('Envio ' + progress + '% Concluído');
      this.presentToast(message);

      switch (envio.snapshot.state) {
        case firebase.storage.TaskState.PAUSED:   // or Paused
          console.log('upLoad is paused');
          break;

        case firebase.storage.TaskState.RUNNING:   // OR Running
          console.log('upload is running');
          break;

      }

    }, (error) => {
      console.log(error);

    }

    )
  }
}


