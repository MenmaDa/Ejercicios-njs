import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente1Component } from "../app/componentes/componente1/componente1.component";
import { Componente2Component } from "../app/componentes/componente2/componente2.component";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, Componente1Component, Componente2Component]
})
export class AppComponent {
  title = 'JuevesSanto';
}
