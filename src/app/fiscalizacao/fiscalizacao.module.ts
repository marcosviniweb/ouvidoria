import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiscalizacaoPageRoutingModule } from './fiscalizacao-routing.module';

import { FiscalizacaoPage } from './fiscalizacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiscalizacaoPageRoutingModule
  ],
  declarations: [FiscalizacaoPage]
})
export class FiscalizacaoPageModule {}
