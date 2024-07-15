import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICentro } from '../models/ICentro';

const apikey='';
const urlbase = '';



@Injectable({
  providedIn: 'root'
})
export class ApiEducaService {

  apikey=''
  tokenAutenticacion=null
  urlBase=''

 
  constructor(private http: HttpClient) { }

  obtenerTodosLosCentros(): ICentro[]
  {
    
    let opcionesPeticion = new OpcionesPeticion();

    opcionesPeticion['observe'] = 'response';

    if (this.tokenAutenticacion) {
      const headers = new HttpHeaders( {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.tokenAutenticacion}`
      });
      

  };

  return [];
  }
}


class OpcionesPeticion {
  observe: string;
  headers: HttpHeaders;
  params: HttpParams;
}
