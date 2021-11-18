import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
      path: 'home',
      loadChildren: './home/home.module#HomePageModule',
    },
    
  {
    path: 'remocao',
    loadChildren: './remocao/remocao.module#RemocaoPageModule',
  
  } 

]
  },
  { 
    path: '',
    redirectTo: '/menu/home'

      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
