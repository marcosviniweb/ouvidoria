import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IluminacaoPage } from './iluminacao.page';

const routes: Routes = [
  {
    path: '',
    component: IluminacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IluminacaoPageRoutingModule {}
