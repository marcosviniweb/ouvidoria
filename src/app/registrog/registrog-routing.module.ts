import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrogPage } from './registrog.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrogPageRoutingModule {}
