import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrMaskerModule } from 'br-mask';
import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    BrMaskerModule],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
