import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemocaoPage } from './remocao.page';

const routes: Routes = [
  {
    path: '',
    component: RemocaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemocaoPageRoutingModule {}
