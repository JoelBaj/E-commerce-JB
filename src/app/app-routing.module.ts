import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'tienda',
    loadChildren:()=> import('./productos/productos.module').then(m => m.ProductosModule)
  },
   {
    path:'auth',
    loadChildren:()=> import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
