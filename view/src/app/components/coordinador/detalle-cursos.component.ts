import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/services/cursos.service';
import { MatriculaService } from 'src/app/services/matricula.service';

@Component({
  selector: 'app-detalle-cursos',
  templateUrl: './detalle-cursos.component.html',
  styles: []
})
export class DetalleCursosComponent implements OnInit {
  public cursos
  public message1
  public detalleCurso
  public control1 = true;
  public control2
  constructor(private _cursoService: CursosService, private _matriculaService: MatriculaService) {
  }

  ngOnInit() {
    this._cursoService.ngGetCursosDisponibles().subscribe(response => {
      this.cursos = response
    }, error => {
      console.log(error);
    })
  }

  ngViewDetail(id) {
    this._cursoService.ngGetDetalleCurso(id).subscribe(response => {
      let aux = JSON.parse(JSON.stringify(response))
      if (aux.length == 0) {
        this.message1 = "No hay personas matriculadas en este curso"
        setTimeout(() => {
          this.message1 = false
        }, 3000);
      } else {
        this.detalleCurso = response
        setTimeout(() => {
          this.detalleCurso = false
        }, 60000);
      }
    }, error => {
      console.log(error);
    })
  }

  ngDelete(curso) {
    this._matriculaService.ngDeteMatriculaCoor(curso).subscribe(response => {
      this.cursos = response
      this.control1 = false
      setTimeout(() => {
        location.reload()
      }, 1000);
    }, error => {
    })
  }


}
