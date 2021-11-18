import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProblemasaudePage } from './problemasaude.page';

const routes: Routes = [
  {
    path: '',
    component: ProblemasaudePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProblemasaudePageRoutingModule {}
