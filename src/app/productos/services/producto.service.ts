import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Producto } from '../models/productos';
import { Observable } from 'rxjs';
import { Usuario } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlApi: string = environment.baseUrl;
  
  constructor(private http: HttpClient) { }

  listarProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.urlApi}/products`);
  }
  listarUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.urlApi}/users`);
  }
  
  getProductById(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.urlApi}/products/${id}`);
    
  }
  // categoriaProductos(): Observable<Producto[]> {
  //   return this.http.get<Producto[]>(`${this.urlApi}/products/categories`);
  // }
    categoriaProductos(categoria: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.urlApi}/products/category/${categoria}`);
  }
  guardarProducto(producto: Producto): void {
    let productoFavoritos: Producto[] = this.obtenerProductosFavoritos();
    productoFavoritos.push(producto);
    localStorage.setItem('productoFavoritos', JSON.stringify(productoFavoritos));
  }

  obtenerProductosFavoritos(): Producto[] {
    return JSON.parse(localStorage.getItem('productoFavoritos') || '[]');
  }
  
  
}

