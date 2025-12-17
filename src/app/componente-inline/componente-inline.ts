import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-inline',
  imports: [],
  template: `
  <h1>{{tituloComponenteInline}}</h1>
    <p> Independientemente que sea un componente inline o un componente normal ambos se deben importar en app.ts  </p>
  `,
  styles: `
   h1 {
color: blue;
}
p {
font-size: 20px;
}
  `,
})
export class ComponenteInline {

  tituloComponenteInline = "Componente in Line por Angular"

}
