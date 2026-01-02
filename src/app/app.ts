import { Component, signal } from '@angular/core';
import { PadreComponent } from './padre-component/padre-component';
import { ViewChildComponent } from './view-child-component/view-child-component';


@Component({
  selector: 'app-root',
  imports: [ PadreComponent,ViewChildComponent ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Decorador @Input() en Angular');

}
