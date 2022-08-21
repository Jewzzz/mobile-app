import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickupCallsPageRoutingModule } from './pickup-calls-routing.module';

import { PickupCallsPage } from './pickup-calls.page';
import { PickupCallComponentComponent } from 'src/app/component/pickup-call-component/pickup-call-component.component';
//import { PickupCallComponentComponent } from 'src/app/component/pickup-call-component/pickup-call-component.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickupCallsPageRoutingModule
  ],
  declarations: [PickupCallsPage , PickupCallComponentComponent/*PickupCallComponentComponent*/]
})
export class PickupCallsPageModule {}
