import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion-component',
  imports: [],
  templateUrl: './interpolacion-component.html',
  styleUrl: './interpolacion-component.css',
})
export class InterpolacionComponent {
  titulo = 'Universidad Angular'

  usuario = {
    nombre: 'Arnaldo Bonillo',
    edad: '48'
  };

  saludar(){
    return `Hola, ${this.usuario.nombre}`;
  }
}
