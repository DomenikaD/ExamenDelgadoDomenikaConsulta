import { Component } from '@angular/core';
import { Curso } from 'src/app/model/Curso';
import { Inscripcion } from 'src/app/model/Inscripcion';
import { CursoService } from 'src/app/services/curso.service';
import { InscripcionService } from 'src/app/services/inscripcion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  curso: Curso | undefined;
  inscripciones: Inscripcion[] = [];
  numeroCurso: number = 0;

  constructor(private cursoService: CursoService, private inscripcionService: InscripcionService) { }

  ngOnInit(): void {
  }

  getCurso(): void {
    this.cursoService.getCurso(this.numeroCurso).subscribe(data => {
      this.curso = data;
      this.getInscripciones();
    });
  }

  getInscripciones(): void {
    if (this.numeroCurso) {
      this.inscripcionService.getInscripcionesPorCurso(this.numeroCurso).subscribe(data => {
        this.inscripciones = data;
        console.log(this.inscripciones)
      });
    }
  }

}
