import { Component } from '@angular/core';
import { Producto } from '../../models/productos';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.css']
})
export class DetallesProductoComponent {

 
  detalle: Producto | undefined;
  producto: Producto[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productoService: ProductoService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = +params['id']; 
      this.productoService.getProductById(id).subscribe(producto => {
        this.detalle = producto;
        console.log(this.detalle);
        
      });
    });
  }
  regresar(){
    this.router.navigate(['./tienda/producto'])
  }
  agregarCarrito(producto: Producto) {
    const productoFavoritos: Producto[] = this.productoService.obtenerProductosFavoritos();
    const productoExistente = productoFavoritos.find(p => p.title === producto.title);

    if (productoExistente) {
      alert(`El producto "${producto.title}" ya está en el carrito.`);
    } else {
      this.productoService.guardarProducto(producto);
      alert(`El producto "${producto.title}" se agregó al carrito.`);
    }
  }
}
