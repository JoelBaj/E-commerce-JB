import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'tienda',
    loadChildren:()=> import('./productos/productos.module').then(m => m.ProductosModule)
  },
  {
    path: '**',
    redirectTo: 'tierda'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
