import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProblemasaudePageRoutingModule } from './problemasaude-routing.module';

import { ProblemasaudePage } from './problemasaude.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProblemasaudePageRoutingModule
  ],
  declarations: [ProblemasaudePage]
})
export class ProblemasaudePageModule {}
