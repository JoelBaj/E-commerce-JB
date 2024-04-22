import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/productos';
import { Usuario } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{
  
  producto: Producto[] = [];
  usuario: Usuario[] = [];
  constructor(private productoService:ProductoService, private router:Router){}

  ngOnInit(): void {
    this.listaProducto();
    
  }

  listaProducto(){
    this.productoService.listarProductos()
    .subscribe(producto =>{
      this.producto = producto.splice(0,20)
      console.log(this.producto);
      
    })
  }
  verDetalles(id:number) {
    this.router.navigate(['tienda/detalle/',{ id: id }]);
  }
  
}
