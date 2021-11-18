import { Component, OnInit } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx'
import { Platform } from '@ionic/angular';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {
  videos: Observable<any[]>;
  // CHAVE DE AUTENTICAÇÃO DO YOUTUBE
  apiKey = 'AIzaSyDd-ytI2Pb6ngc1-H6PkMXQfwyI9kCXpZ8';
  // ID DA PLAYLIST
  playlist = 'UUyP1VV9wKBt9VqBRZqMc0NQ';
  //https://www.youtube.com/watch?v=1T-FUlu68BQ&list=UUyP1VV9wKBt9VqBRZqMc0NQ
  constructor(private youtube: YoutubeVideoPlayer, public http: HttpClient, private plt: Platform) { }

  ngOnInit() {
      this.videos = this.pegarvideo();
   
  }

  // função para puxar o vídeo via api do youtube

  pegarvideo(){

    return this.http.get<any[]>('https://www.googleapis.com/youtube/v3/playlistItems?key=' + this.apiKey + '&playlistId='+this.playlist+'&part=snippet,id&maxResults=20')
    .pipe(
      map(resp => {
        // pegando somente os items do json
        return resp['items'];
        console.log(resp['items'])
      })
    )
  }

    assistir(item){
      if (this.plt.is('cordova')) {
        this.youtube.openVideo(item);
      } else {
        window.open('https://www.youtube.com/watch?v=' + item);
      }
    }
    }

