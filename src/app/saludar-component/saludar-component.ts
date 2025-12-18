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

  private titulo = 'dsdsdsds';
  private titulo2 = 'Property Binding';
  private titulo3 = 'Two Way Binding';
  

  get mostrarTitulo(){
    return this.titulo;    
  }

  getmostrarTitulo() {
    return this.titulo2;
  }

  mostrarTitulex(){
    return this.titulo3;
  }
  

}
