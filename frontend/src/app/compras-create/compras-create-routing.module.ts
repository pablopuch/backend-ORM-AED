import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComprasCreatePage } from './compras-create.page';

const routes: Routes = [
  {
    path: '',
    component: ComprasCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComprasCreatePageRoutingModule {}
