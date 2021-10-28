import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteCreatePage } from './cliente-create.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteCreatePageRoutingModule {}
