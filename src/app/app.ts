import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponente } from './nuevo-componente/nuevo-componente';
import { ComponenteInline } from './componente-inline/componente-inline';
import { InterpolacionComponent } from './interpolacion-component/interpolacion-component';
import { PadreComponent } from './padre-component/padre-component';

@Component({
  selector: 'app-root',
  imports: [
            RouterOutlet,
            NuevoComponente,
            ComponenteInline,
            InterpolacionComponent,
            PadreComponent
          ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-angular-componente');
}
