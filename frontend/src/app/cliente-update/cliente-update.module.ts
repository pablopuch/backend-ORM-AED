import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteUpdatePageRoutingModule } from './cliente-update-routing.module';

import { ClienteUpdatePage } from './cliente-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteUpdatePageRoutingModule
  ],
  declarations: [ClienteUpdatePage]
})
export class ClienteUpdatePageModule {}
