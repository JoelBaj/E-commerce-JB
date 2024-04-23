import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { DetallesProductoComponent } from './pages/detalles-producto/detalles-producto.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { loginGuard } from '../guards/login.guard';
import { CategoriaComponent } from './pages/categoria/categoria.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {path:'producto', component:ProductosComponent,canActivate:[loginGuard]},
      { path: 'detalle', component: DetallesProductoComponent,canActivate:[loginGuard] },
      { path: 'carrito', component: CarritoComponent,canActivate:[loginGuard] },
      { path: 'categoria', component: CategoriaComponent,canActivate:[loginGuard] },
      {path:'usuario', component:UsuariosComponent,canActivate:[loginGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
