import { Component, OnInit } from '@angular/core';
import { MatriculaService } from 'src/app/services/matricula.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styles: []
})
export class CursosComponent implements OnInit {
  public user
  public matriculas;
  public messageResponse = 0
  public inscripcion
  constructor(private _matriculaService: MatriculaService) {
    this.user = JSON.parse(localStorage.getItem('user'))
  }

  ngOnInit() {
    this.ngGetMatriculas()
  }

  ngDeleteins(id) {
    this._matriculaService.ngdeteleMatricula(id).subscribe(response => {
      this.inscripcion = true;
      setTimeout(() => {
        this.inscripcion = false
        location.reload()
      }, 2000);
    }, error => {
      console.log(error);
    })
  }

  ngGetMatriculas() {
    this._matriculaService.ngGetMatricula(this.user.user.documento).subscribe(response => {
      console.log(response);
      this.matriculas = response;
      this.messageResponse = this.matriculas.length
    }, error => {
      console.log(error);
    })
  }
}
