import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlagamentoPageRoutingModule } from './alagamento-routing.module';

import { AlagamentoPage } from './alagamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlagamentoPageRoutingModule
  ],
  declarations: [AlagamentoPage]
})
export class AlagamentoPageModule {}
