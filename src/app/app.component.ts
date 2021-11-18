import { Component } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Platform , AlertController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { IdeaService } from './services/idea.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
 


  registros = [];
  registrosg = [];
  navigate : any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private nav: NavController,
    private authService: AuthService,
    private oneSignal: OneSignal,
    private ideaService: IdeaService,
    private alertCtrl: AlertController
  ) {
    this.initializeApp();
    this.sideMenu();
  }
  pedido : string;
  ngOnInit() {
    var userId = this.authService.getAuth().currentUser.uid;
      console.log (userId);
    this.ideaService.pegarDados(userId).subscribe(res => {
      
      this.registros = res;
      
    });
    var tipo = "Solicitacao";
    this.ideaService.pegargeral(tipo).subscribe(res => {
      
      this.registrosg = res;
      
    });
  }

  logout(){
    this.authService.logout();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      if (this.platform.is('cordova')) {
        this.setupPush();
      }

    });
  }

  // ENVIAR NOTIFICAÇÃO 
  setupPush() {
    // I recommend to put these into your environment.ts
    this.oneSignal.startInit('855d3da1-5dab-491f-86e9-a6ddded665db', 'NmE3NWYyMzMtYmViOS00MDM0LWJiMjUtNjEwYjAyNDI5MGQz');
 
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);
 
    // Notifcation was received in general
    this.oneSignal.handleNotificationReceived().subscribe(data => {
      let msg = data.payload.body;
      let title = data.payload.title;
      let additionalData = data.payload.additionalData;
      this.showAlert(title, msg, additionalData.task);
    });
 
    // Notification was really clicked/opened
    this.oneSignal.handleNotificationOpened().subscribe(data => {
      // Just a note that the data is a different place here!
      let additionalData = data.notification.payload.additionalData;
    
      this.showAlert('Notificação Aberta', 'Bem vindo', additionalData.task);
      this.nav.navigateForward(['videos/']);
    });
    
    this.oneSignal.endInit();
   
  }
 
  async showAlert(title, msg, task) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: msg,
      buttons: [
        {
         
          text: `Action: ${task}`,
         
          handler: () => {
            this.nav.navigateForward(['perfil/']);
          }
        }
      ]
    })
    alert.present();
  }



  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Home",
        url   : "/home",
        icon  : "home"
      },
      {
        title : "Perfil",
        url   : "/perfil",
        icon  : "person"
      },
      {
        title : "Portal da Prefeitura",
        url   : "/seguranca",
        icon  : "globe"
      },
    ]
  }
}
