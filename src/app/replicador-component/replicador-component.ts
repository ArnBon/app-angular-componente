import { Component } from '@angular/core';

@Component({
  selector: 'app-replicador-component',
  imports: [],
  templateUrl: './replicador-component.html',
  styleUrl: './replicador-component.css',
})
export class ReplicadorComponent {

  texto: string = '';


  actualzarTexto(event: Event): void{
    const elemntoInput = event.target as HTMLInputElement;
    this.texto = elemntoInput.value;
  }  

}
