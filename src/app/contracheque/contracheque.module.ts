import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContrachequePageRoutingModule } from './contracheque-routing.module';

import { ContrachequePage } from './contracheque.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContrachequePageRoutingModule
  ],
  declarations: [ContrachequePage]
})
export class ContrachequePageModule {}
