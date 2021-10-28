import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteCreatePageRoutingModule } from './cliente-create-routing.module';

import { ClienteCreatePage } from './cliente-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteCreatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ClienteCreatePage]
})
export class ClienteCreatePageModule {}
