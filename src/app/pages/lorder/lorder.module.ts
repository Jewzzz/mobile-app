import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LorderPageRoutingModule } from './lorder-routing.module';

import { LorderPage } from './lorder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LorderPageRoutingModule
  ],
  declarations: [LorderPage]
})
export class LorderPageModule {}
