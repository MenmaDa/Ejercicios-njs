import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaPersonaComponent } from './componentes/persona/lista-persona/lista-persona.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaPersonaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto-Practicas';
}
