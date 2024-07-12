import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apikey='';
const urlbase = '';

@Injectable({
  providedIn: 'root'
})
export class ApiEducaService {

 
  constructor(private http: HttpClient) { }

  obtenerTodosLosCursosCentros(): ICursoCentro[]|null
  {
    return null;
  };
}
