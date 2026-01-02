import { Component, EventEmitter, Output, signal } from '@angular/core';

@Component({
  selector: 'app-hijo-output-component',
  imports: [],
  templateUrl: './hijo-output-component.html',
  styleUrl: './hijo-output-component.css',
})
export class HijoOutputComponent {
    protected readonly title2 = signal('Decorador @Output() en Angular');

    @Output() notificarPadre = new EventEmitter<string>();



  enviarMensajeHijo(){
    this.notificarPadre.emit('Mensaje enviado desde el componente hijo al componente padre');
  }
}
