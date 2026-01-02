import { Component,  Input } from '@angular/core';

@Component({
  selector: 'app-hijo-component',
  imports: [],
  templateUrl: './hijo-component.html',
  styleUrl: './hijo-component.css',
})
export class HijoComponent {
   //el signo de admiracion "!" en angular se llama "non-null assertion operator"
  @Input() mensajepropiedadHijo!: string;


}
