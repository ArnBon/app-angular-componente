import { Component } from '@angular/core';
import { HijoComponent } from './hijo-component/hijo-component';
import { EncapsulamientoComponent } from '../encapsulamiento-component/encapsulamiento-component';

@Component({
  selector: 'app-padre-component',
  imports: [HijoComponent, EncapsulamientoComponent],
  templateUrl: './padre-component.html',
  styleUrl: './padre-component.css',
})
export class PadreComponent {

}
