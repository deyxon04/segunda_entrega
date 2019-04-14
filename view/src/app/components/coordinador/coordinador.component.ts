import { Component, OnInit } from '@angular/core';
import { CursosService } from "../../services/cursos.service";
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-coordinador',
  templateUrl: './coordinador.component.html',
  styles: []
})
export class CoordinadorComponent implements OnInit {
  public cursos
  public validate: boolean = false;
  public errorResponse
  public successResponse
  constructor(private _cursosService: CursosService) { }

  ngOnInit() {
    this._cursosService.ngGetAllcursos().subscribe(response => {
      this.cursos = response
    }, error => {
      console.log(error);
    })
  }

  ngChange() {
    this.validate = true;
  }

  ngSubmitcurso(forma: NgForm) {
    if (forma.valid) {
      this._cursosService.ngSetCurso(forma.value).subscribe(response => {
        this.successResponse = true
        setTimeout(() => {
          this.successResponse = false;
          forma.reset('');
        }, 3000);
      }, error => {
        this.errorResponse = error.error.message
        setTimeout(() => {
          this.errorResponse = false
        }, 2000);
      })
    } else {
      console.log("debes rellenar todos los campos");
    }
  }
}
