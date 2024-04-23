import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/productos';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit{
  productoFavoritos: Producto[] = [];
  total: number = 0;
  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoFavoritos = this.productoService.obtenerProductosFavoritos();
  }
  eliminarProducto(producto: Producto) {
    const index = this.productoFavoritos.indexOf(producto);
    if (index !== null) {
      this.productoFavoritos.splice(index, 1);
      localStorage.setItem('productoFavoritos', JSON.stringify(this.productoFavoritos));
    }
  }

  calcularTotal(): number {
      return this.productoFavoritos.reduce((total, producto) => total + producto.price, 0);
  }
}
