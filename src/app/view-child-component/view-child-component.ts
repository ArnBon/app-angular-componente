import { Component, ElementRef, signal, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-view-child-component',
  imports: [],
  templateUrl: './view-child-component.html',
  styleUrl: './view-child-component.css',
})
export class ViewChildComponent {
  protected readonly title3 = signal('Decorador @ViewChild() en Angular');

  @ViewChild('referenciaInput') inputElemento!: ElementRef;

  cambiarTexto() {
    this.inputElemento.nativeElement.value = 'Texto cambiado';
  }
}


