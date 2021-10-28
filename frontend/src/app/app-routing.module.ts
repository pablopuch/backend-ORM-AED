import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'create',
    pathMatch: 'full'
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'cliente-list',
    loadChildren: () => import('./cliente-list/cliente-list.module').then( m => m.ClienteListPageModule)
  },
  {
    path: 'update/:id',
    loadChildren: () => import('./update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'cliente-update/:id',
    loadChildren: () => import('./cliente-update/cliente-update.module').then( m => m.ClienteUpdatePageModule)
  },
  {
    path: 'cliente-create',
    loadChildren: () => import('./cliente-create/cliente-create.module').then( m => m.ClienteCreatePageModule)
  },
  {
    path: 'compras-list',
    loadChildren: () => import('./compras-list/compras-list.module').then( m => m.ComprasListPageModule)
  },
  {
    path: 'compras-create',
    loadChildren: () => import('./compras-create/compras-create.module').then( m => m.ComprasCreatePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
