import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeusregistrosPage } from './meusregistros.page';

const routes: Routes = [
  {
    path: '',
    component: MeusregistrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeusregistrosPageRoutingModule {}
