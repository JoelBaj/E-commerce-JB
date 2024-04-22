import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/user';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit{

  usuario: Usuario[] = [];
  constructor(private productoService:ProductoService){}

  ngOnInit(): void {
    this.listaUsuario()
    
  }

  listaUsuario(){
    this.productoService.listarUsuarios()
    .subscribe(usuario =>{
      this.usuario = usuario
      console.log(this.usuario);
      
    })
  }

}
