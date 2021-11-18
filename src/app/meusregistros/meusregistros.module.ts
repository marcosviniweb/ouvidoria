import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeusregistrosPageRoutingModule } from './meusregistros-routing.module';

import { MeusregistrosPage } from './meusregistros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeusregistrosPageRoutingModule
  ],
  declarations: [MeusregistrosPage]
})
export class MeusregistrosPageModule {}
