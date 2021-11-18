import { Router, RouterEvent } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {


    pages = [
      { 
        title: 'Home',
        url: '/menu/home'
     },
       {
         title: 'remocao',
        url: '/menu/remocao'
     } 
   
    ];

    selectedPath = '';


  constructor(private router: Router) {

      this.router.events.subscribe((event: RouterEvent) =>{
        this.selectedPath = event.url;
      });

   }

  ngOnInit() {
  }

}
