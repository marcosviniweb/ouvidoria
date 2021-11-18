import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrogPageRoutingModule } from './registrog-routing.module';

import { RegistrogPage } from './registrog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrogPageRoutingModule
  ],
  declarations: [RegistrogPage]
})
export class RegistrogPageModule {}
