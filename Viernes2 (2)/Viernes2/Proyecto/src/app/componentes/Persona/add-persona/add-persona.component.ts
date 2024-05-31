import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Persona } from '../../../interfaces/Persona';
import { CommonModule } from '@angular/common';
import { PersonaService } from '../../../service/PersonaService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-persona',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-persona.component.html',
  styleUrl: './add-persona.component.css'
})
export class AddPersonaComponent implements OnInit {
  form: FormGroup;

  constructor(fb: FormBuilder, private personaService: PersonaService){
    this.form = fb.group({
      identicacion: ["", Validators.required],
      primernombre: ["", Validators.required],
      segundonombre: [""],
      primerapellido: ["", Validators.required],
      segundoapellido: [""]
    });
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addPersona(){

    const persona: Persona ={
      idpersona:0,
      identificacion: this.form.value.identicacion,
      primernombre: this.form.get('primernombre')?.value,
      segundonombre: this.form.value.segundonombre,
      primerapellido: this.form.value.primerapellido,
      segundoapellido: this.form.value.segundoapellido
    }

    //Consumir el Servicio en BD
    this.personaService.createPersona(persona).subscribe(
      (data) => {
        Swal.fire({
          title: '¡Guardado!',
          text: 'Registro guardado',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      },
      (error) => {
        console.error('Error fetching posts', error);
      }
    );
  }
}
