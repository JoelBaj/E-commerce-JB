import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './pages/productos/productos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { DetallesProductoComponent } from './pages/detalles-producto/detalles-producto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';

@NgModule({
  declarations: [
    ProductosComponent,
    UsuariosComponent,
    DetallesProductoComponent,
    CarritoComponent,
    CategoriaComponent,

  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[
    ProductosComponent,
    UsuariosComponent,
    DetallesProductoComponent,
    CarritoComponent
  ]
})
export class ProductosModule { }
