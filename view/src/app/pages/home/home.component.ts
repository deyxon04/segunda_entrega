import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  public cursos
  public oneCurso
  constructor(private _cursosService: CursosService) { }

  ngOnInit() {
    this._cursosService.ngGetcursos().subscribe(response => {
      this.cursos = response
    }, error => {
      console.log(error);
    })
  }
 
  ngGetDetail(curso) {
    this._cursosService.ngGetOneCurso(curso).subscribe(response => {
      this.oneCurso = response;
      setTimeout(() => {
        this.oneCurso = false
      }, 10000);
    }, error => {
      console.log(error);
    })
  }

}
