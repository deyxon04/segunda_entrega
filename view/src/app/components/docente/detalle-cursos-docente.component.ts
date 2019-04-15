import { Component, OnInit } from '@angular/core';
import { DocenteService } from 'src/app/services/docente.service';
import { MatriculaService } from 'src/app/services/matricula.service';

@Component({
  selector: 'app-detalle-cursos-docente',
  templateUrl: './detalle-cursos-docente.component.html',
  styles: []
})
export class DetalleCursosDocenteComponent implements OnInit {
  public docente
  public cursosAdocente
  public cursoStorage

  constructor(private _docenteService: DocenteService, private _matriculaService: MatriculaService) {
    this.docente = JSON.parse(localStorage.getItem('user'))
  }

  ngOnInit() {
    this._docenteService.nggetCursosDocente(this.docente.user.documento).subscribe(response => {
      this.cursosAdocente = response
    }, error => {
      console.log(error);
    })
  }

  ngViewCurso(id) {
    this._matriculaService.ngGetMatriculaDocen(id).subscribe(response => {
      this.cursoStorage = response
      console.log(this.cursoStorage);
    }, error => {
      console.log(error);
    })
  }

}
