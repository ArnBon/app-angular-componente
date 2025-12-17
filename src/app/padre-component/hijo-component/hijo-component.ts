import { Component } from '@angular/core';
import { Ejemplo } from '../ejemplo/ejemplo';

@Component({
  selector: 'app-hijo-component',
  imports: [Ejemplo],
  templateUrl: './hijo-component.html',
  styleUrl: './hijo-component.css',
})
export class HijoComponent {

}
