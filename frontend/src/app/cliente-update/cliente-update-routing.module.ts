import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteUpdatePage } from './cliente-update.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteUpdatePageRoutingModule {}
