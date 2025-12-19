import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-mensaje-component',
  imports: [],
  templateUrl: './mostrar-mensaje-component.html',
  styleUrl: './mostrar-mensaje-component.css',
})
export class MostrarMensajeComponent {
  private titulo = 'Event Binding';
  mensaje: string = '';

    get mostrarTitulo(){
    return this.titulo;    
  } 

  mostrarmensaje(): void {
    this.mensaje = 'Hola has hecho click en el boton!';
  }

  resetearMensaje(): void {
    this.mensaje = '';
  }
}
