import { Inscripcion } from "./Inscripcion"; 

export class Curso {
  codigo_curso?: number;
  nombre?: string;
  cupo?: number;
  fecha_inicio?: Date;
  nCurso?: Curso;
}
