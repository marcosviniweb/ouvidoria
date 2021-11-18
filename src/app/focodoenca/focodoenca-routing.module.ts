import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FocodoencaPage } from './focodoenca.page';

const routes: Routes = [
  {
    path: '',
    component: FocodoencaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FocodoencaPageRoutingModule {}
