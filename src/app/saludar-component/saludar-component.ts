import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-saludar-component',
  imports: [FormsModule],
  templateUrl: './saludar-component.html',
  styleUrl: './saludar-component.css',
})
export class SaludarComponent {
  saludo = 'Saludo inicial';

  private titulo = 'Event Binding';  
  private titulo3 = 'Two Way Binding';
  

  get mostrarTitulo(){
    return this.titulo;    
  } 

  mostrarTitulex(){
    return this.titulo3;
  }
  

}
