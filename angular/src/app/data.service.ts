import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPersonas() {
    return this.http.get('http://localhost:5000/');
  }

  updatePersona(Name1: string, Name2: string) {
    return this.http.put('http://localhost:5000/editar', { 'nombre1': Name1, 'nombre2': Name2 });
  }

  deletePersona(Name: string) {
    return this.http.delete('http://localhost:5000/eliminar?nombre='+Name);
  }

  addPersona(body:Object)
  {
    return this.http.post('http://localhost:5000/agregar',body);
  }
}
