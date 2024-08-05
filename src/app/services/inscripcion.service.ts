import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  constructor(private http: HttpClient) { }

  public getInscripcionesPorCurso(numero: number) {
    let url = environment.WS_PATH + `/inscripciones/${numero}`
    return this.http.get<any>(url);
  }
}
