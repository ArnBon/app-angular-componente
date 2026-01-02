import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo-view-child-component',
  imports: [],
  templateUrl: './hijo-view-child-component.html',
  styleUrl: './hijo-view-child-component.css',
})
export class HijoViewChildComponent {

  mensaje: string = 'mensaje desde el componente hijo al componente padre';


  cambiarMensaje(nuevoMensaje: string){
    this.mensaje = nuevoMensaje;
  }

}
