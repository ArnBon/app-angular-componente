import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios-service';

@Component({
  selector: 'app-listado-usuarios-component',
  imports: [],
  templateUrl: './listado-usuarios-component.html',
  styleUrl: './listado-usuarios-component.css',
})
export class ListadoUsuariosComponent {

  usuarios: any[] = [];

  //aqui inyectas el servicio
  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.usuariosService.obtenerUsuarios().subscribe((data) => {
      this.usuarios = data;
    });
  }
}
