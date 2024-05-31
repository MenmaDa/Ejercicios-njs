import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private apiUrl = 'http://localhost:3000'; // URL de la API

  constructor(private http: HttpClient) { }

  // Método para obtener datos (GET)
  getPersonas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/persona`);
  }

  // Método para enviar datos (POST)
  createPersona(persona: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/persona`, persona);
  }

  // Método para actualizar datos (PUT)
  updatePersona(persona: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/persona/${persona.id}`, persona);
  }

  // Método para eliminar datos (DELETE)
  deletePersona(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/persona/${id}`);
  }
}
