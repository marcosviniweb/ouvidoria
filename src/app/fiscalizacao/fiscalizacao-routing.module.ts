import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiscalizacaoPage } from './fiscalizacao.page';

const routes: Routes = [
  {
    path: '',
    component: FiscalizacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiscalizacaoPageRoutingModule {}
