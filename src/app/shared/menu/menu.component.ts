import { Component, inject } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';


interface MenuItem{
  texto:string;
  ruta:string;
}


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
 authservice = inject(AuthService)
  constructor(private router:Router) { }
    Menu:MenuItem[] =[
      {texto:'Productos', ruta:'/tienda/producto'},
      {texto:'Categoria', ruta:'/tienda/categoria'},
      {texto:'Carrito', ruta:'/tienda/carrito'},
      // {texto:'Detalles', ruta:'/tienda/detalle'},
      {texto:'Usuarios', ruta:'/tienda/usuario'}
    ]
  logout() { 
      localStorage.removeItem('token');
      this.router.navigate(['/login'])
    }
}