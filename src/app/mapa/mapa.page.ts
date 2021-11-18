import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController, LoadingController, ToastController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

declare var google;


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})

export class MapaPage implements OnInit {
  map: any;
  constructor(
    private authService: AuthService,
    private afa: AngularFireAuth,
    private afs: AngularFirestore,
    private Modal: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private nav: NavController,
     private activeRoute: ActivatedRoute,
    private geolocation: Geolocation,
  ) { }

  ngOnInit() {
    let mapa = this.activeRoute.snapshot.paramMap['id'];
    this.activeRoute.paramMap.subscribe(params => {
      console.log( params.get('latitude'));
      console.log( params.get('longitude'));
      let latitude = params.get('latitude');
      let lonitude = params.get('longitude');
 
    let latLng = new google.maps.LatLng(latitude,lonitude);

    
	
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
      
    })

  }
 
}
