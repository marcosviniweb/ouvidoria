import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IluminacaoPageRoutingModule } from './iluminacao-routing.module';

import { IluminacaoPage } from './iluminacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IluminacaoPageRoutingModule
  ],
  declarations: [IluminacaoPage]
})
export class IluminacaoPageModule {}
