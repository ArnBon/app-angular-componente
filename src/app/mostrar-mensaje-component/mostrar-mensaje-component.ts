import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-mensaje-component',
  imports: [],
  templateUrl: './mostrar-mensaje-component.html',
  styleUrl: './mostrar-mensaje-component.css',
})
export class MostrarMensajeComponent {
  mensaje: string = '';

  mostrarmensaje(): void {
    this.mensaje = 'Hola has hecho click en el boton!';
  }

  resetearMensaje(): void {
    this.mensaje = '';
  }
}
