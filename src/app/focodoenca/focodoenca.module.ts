import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FocodoencaPageRoutingModule } from './focodoenca-routing.module';

import { FocodoencaPage } from './focodoenca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FocodoencaPageRoutingModule
  ],
  declarations: [FocodoencaPage]
})
export class FocodoencaPageModule {}
