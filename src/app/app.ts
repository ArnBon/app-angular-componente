import { Component, signal } from '@angular/core';
import { PadreComponent } from './padre-component/padre-component';
import { ViewChildComponent } from './view-child-component/view-child-component';
import { MensajeService } from './mensaje-service';
import { ListadoUsuariosComponent } from './listado-usuarios-component/listado-usuarios-component';


@Component({
  selector: 'app-root',
  imports: [ PadreComponent,ViewChildComponent, ListadoUsuariosComponent ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Servicios en Angular');

  mensaje: string;

  constructor(mensajeService: MensajeService) {
    this.mensaje = mensajeService.obtenerMensaje();
  }


}
