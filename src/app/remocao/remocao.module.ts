import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemocaoPageRoutingModule } from './remocao-routing.module';

import { RemocaoPage } from './remocao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemocaoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RemocaoPage]
})
export class RemocaoPageModule {}
