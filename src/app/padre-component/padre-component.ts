import { Component, signal, ViewChild } from '@angular/core';
import { HijoComponent } from './hijo-component/hijo-component';
import { HijoViewChildComponent } from './hijo-view-child-component/hijo-view-child-component';
import { HijoOutputComponent } from './hijo-output-component/hijo-output-component';

@Component({
  selector: 'app-padre-component',
  imports: [HijoComponent, HijoOutputComponent, HijoViewChildComponent],
  templateUrl: './padre-component.html',
  styleUrl: './padre-component.css',
})
export class PadreComponent {
  mensajePadre: string = 'Mensaje enviado desde el componente padre al componente hijo';
  recibirMensaje: string = ''; //recibe el mensaje enviado desde el componente hijo y lo asigna a la propiedad recibirMensaje
  protected readonly title2 = signal('Decorador @ViewChild() en Angular');

  @ViewChild(HijoViewChildComponent) hijoviewChildComponent!: HijoViewChildComponent;

  recibirNotificacion(recibirMensaje: string){
    this.recibirMensaje = recibirMensaje;
  }

  cambiarMensajeHijo(){
    this.hijoviewChildComponent.cambiarMensaje('Mensaje cambiado desde el componente padre al componente hijo');
  }

}
