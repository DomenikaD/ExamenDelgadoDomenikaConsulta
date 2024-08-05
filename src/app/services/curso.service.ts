import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }
  public getCurso(codigo_curso: number) {
    console.log(codigo_curso)
    let url = environment.WS_PATH + `/cursos/${codigo_curso}`
    console.log(url)
    return this.http.get<any>(url);
  }
}
