import { Component } from '@angular/core';

import { Router } from '@angular/router';


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

  constructor() { }
    Menu:MenuItem[] =[
      {texto:'Productos', ruta:'/tienda/producto'},
      {texto:'Carrito', ruta:'/tienda/carrito'},
      // {texto:'Detalles', ruta:'/tienda/detalle'},
      {texto:'Usuarios', ruta:'/tienda/usuario'}
    ]

}