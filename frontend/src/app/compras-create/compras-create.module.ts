import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComprasCreatePageRoutingModule } from './compras-create-routing.module';

import { ComprasCreatePage } from './compras-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComprasCreatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ComprasCreatePage]
})
export class ComprasCreatePageModule {}
