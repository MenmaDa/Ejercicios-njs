import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListPesonaComponent } from "./componentes/Persona/list-pesona/list-pesona.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ListPesonaComponent]
})
export class AppComponent {
  title = 'Proyecto';
}
