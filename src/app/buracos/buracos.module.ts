import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuracosPageRoutingModule } from './buracos-routing.module';

import { BuracosPage } from './buracos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuracosPageRoutingModule
  ],
  declarations: [BuracosPage]
})
export class BuracosPageModule {}
