import { Component, OnInit } from '@angular/core';
import { Persona } from '../../../interfaces/Persona';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from '../../../service/PersonaService';

@Component({
  selector: 'app-list-pesona',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-pesona.component.html',
  styleUrl: './list-pesona.component.css'
})
export class ListPesonaComponent implements OnInit{

  listaPersona: Persona[]=[];

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas(){
    this.personaService.getPersonas().subscribe(
      (data) => {
        this.listaPersona = data;
      },
      (error) => {
        console.error('Error fetching posts', error);
      }
    );
  }
}
