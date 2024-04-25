import { Component, OnInit } from '@angular/core';
import { persona } from '../../../interfaces/persona';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-persona',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit-persona.component.html',
  styleUrl: './edit-persona.component.css'
})
export class EditPersonaComponent implements OnInit{
  listaPersona: persona[]= [
    {
    idPersona: 1,
    Identifiacacion: 12345,
    PrimerNombre: 'Daniel',
    SegundoNombre: 'Alfonso',
    PrimerApellido: 'Agudelo',
    SegundoApellido: 'Guio'
    },
    {
      idPersona: 2,
      Identifiacacion: 44444,
      PrimerNombre: 'Dario',
      SegundoNombre: 'Alberto',
      PrimerApellido: 'Hernadez',
      SegundoApellido: 'Flores'
    },
    {
      idPersona: 3,
      Identifiacacion: 222222,
      PrimerNombre: 'Sebastian',
      SegundoNombre: 'N/A',
      PrimerApellido: 'Aguilera',
      SegundoApellido: 'Lopez'
    }
  ]
  ngOnInit(): void{

  }
}
