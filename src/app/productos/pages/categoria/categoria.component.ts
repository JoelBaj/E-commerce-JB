import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/productos';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categorias: string[] = ['electronics', 'jewelery', "men's clothing", "women's clothing"];
  productos: Producto[] = [];
  categoriaSeleccionada: string = '';
  
  constructor(private productoService: ProductoService) { }
  
  ngOnInit(): void {
    this.activarCategoria('electronics'); 
  }
  
  activarCategoria(categoria: string) {
    if (categoria === this.categoriaSeleccionada) { return; }
    this.categoriaSeleccionada = categoria;
    this.productoService.categoriaProductos(categoria)
      .subscribe(productos => this.productos = productos);
  }
  
  getClaseCSS(categoria: string): string { 
    return (categoria === this.categoriaSeleccionada) ? 'btn btn-primary' : 'btn btn-outline-secondary';
  }


}
