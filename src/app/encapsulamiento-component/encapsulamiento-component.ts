import { Component } from '@angular/core';

@Component({
  selector: 'app-encapsulamiento-component',
  imports: [],
  templateUrl: './encapsulamiento-component.html',
  styleUrl: './encapsulamiento-component.css',
})
export class EncapsulamientoComponent {

  private titulo = 'Método get con Accessor';
  private titulo2 = 'Metodo de encapsulamiento';
  

  get mostrarTitulo(){
    return this.titulo;    
  }

  getmostrarTitulo() {
    return this.titulo2;
  }

}
