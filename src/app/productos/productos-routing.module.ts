import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { DetallesProductoComponent } from './pages/detalles-producto/detalles-producto.component';
import { CarritoComponent } from './pages/carrito/carrito.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {path:'producto', component:ProductosComponent},
      { path: 'detalle', component: DetallesProductoComponent },
      { path: 'carrito', component: CarritoComponent },
      {path:'usuario', component:UsuariosComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
