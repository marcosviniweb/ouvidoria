import { AnunciosService } from './../services/anuncios.service';
import { MeusregistrosPage } from './../meusregistros/meusregistros.page';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ModalController, LoadingController, AlertController, ToastController, NavController, MenuController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { IdeaService } from '../services/idea.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { PipeTransform, Pipe } from '@angular/core';
import { Platform } from '@ionic/angular';

import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';



export interface Idea {
  img:'',
  data: '',
  path:'',

}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  videos= [];
  // CHAVE DE AUTENTICAÇÃO DO YOUTUBE
  apiKey = 'AIzaSyDd-ytI2Pb6ngc1-H6PkMXQfwyI9kCXpZ8';
  // ID DA PLAYLIST
  playlist = 'UUyP1VV9wKBt9VqBRZqMc0NQ';
  //https://www.youtube.com/watch?v=1T-FUlu68BQ&list=UUyP1VV9wKBt9VqBRZqMc0NQ

  registros = [];
  anuncios = [];
  popups = [];
  registrosg = [];
  loading: any;
  meusregistros = MeusregistrosPage;
  private ideas: Observable<Idea[]>;
  private ideaCollection: AngularFirestoreCollection<Idea>;

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
    private anunciosservice: AnunciosService,
    private ideaService: IdeaService,
    private menuCtrl: MenuController,
    private youtube: YoutubeVideoPlayer, public http: HttpClient, private plt: Platform) {}

    ionViewWillEnter() {
      this.menuCtrl.enable(true);
    }
    
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
    async ngOnInit() {

      var userId = this.authService.getAuth().currentUser.uid;

      this.ideaService.pegarDados(userId).subscribe(res => {

        this.registros = res;

      });
      var tipo = "Solicitacao";
      this.ideaService.pegargeral(tipo).subscribe(res => {

        this.registrosg = res;

      });

      // puxar anuncios do banco de dados - parte de baixo do app
      this.ideaService.pegarAnuncios().subscribe(res => {

        this.anuncios = res;

      });


       // puxar pop up
       this.ideaService.popup().subscribe(res => {

        this.popups = res;

        for(let popup of res) {


          let opcao = 'Sim';
          if(popup.disponivel == opcao){

    // mostrar popup por segundos antes de app abrir


    let timerInterval
    Swal.fire({
      html: '<h2 style = "color:white">Aguarde alguns segundos!</h2>',
      backdrop: `
      rgb(0,0,255,0.8)
              url("../../assets/img/imag1.jpg")

              no-repeat
        `,
      background:' #002d61',
       imageUrl: `${popup.img}`,
      showConfirmButton: false,
      timer: 8000,
      timerProgressBar: true,
      onBeforeOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          const content = Swal.getContent()

          if (content) {
             const b = content.querySelector('b')

          }
        }, 100)

      },

      onClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })



          }


        }
      });



      // pegar videos do youtube

      this.ideaService.pegarvideos().subscribe(res => {

        this.videos = res;



        for(let video of res) {


          let opcao = 'Sim';
          if(video.disponivel == opcao){

    // mostrarvideo em pop up


    Swal.fire({
      title: '<h2 style = "color:white">Novo vídeo Postado!</h2>',
      backdrop: `
      rgb(0,0,255,0.8)
              url("../../assets/img/imag1.jpg")

              no-repeat
        `,
      background:' #002d61',
      html:
        `<iframe width="350" height="315" src="https://www.youtube.com/embed/${video.url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `


    })

          }

        }

      });



    }

    pegarvideo(){

      return this.http.get<any[]>('https://www.googleapis.com/youtube/v3/playlistItems?key=' + this.apiKey + '&playlistId='+this.playlist+'&part=snippet,id&maxResults=1')
      .pipe(
        map(resp => {
          // pegando somente os items do json
          let video =  resp['items'];
          for (let item of video ){

            console.log(item.snippet.resourceId.videoId)
            }
            return  video

        })


      )

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
