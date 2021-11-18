import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuracosPage } from './buracos.page';

const routes: Routes = [
  {
    path: '',
    component: BuracosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuracosPageRoutingModule {}
