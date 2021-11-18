import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaneamentoPageRoutingModule } from './saneamento-routing.module';

import { SaneamentoPage } from './saneamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaneamentoPageRoutingModule
  ],
  declarations: [SaneamentoPage]
})
export class SaneamentoPageModule {}
