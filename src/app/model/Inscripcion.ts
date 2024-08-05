import { Curso } from "./Curso";

export class Inscripcion {
  codigo_insc?: number;
  cedula_alumno?: string;
  nombre_alumno?: string;
  apellido_alumno?: string;
  fecha_inscripcion?: Date;
  listaInscripcion?: Inscripcion[];
}
