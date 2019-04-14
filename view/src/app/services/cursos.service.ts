import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { keys } from '../keys'

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private _http: HttpClient) { }

  ngGetcursos() {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    return this._http.get(keys.url + 'getcursos', { headers: headers })
  }

  ngGetAllcursos() {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    return this._http.get(keys.url + 'getallcursos', { headers: headers })
  }

  ngSetCurso(curso) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    return this._http.post(keys.url + 'addcurso', curso, { headers: headers })
  }

  ngGetOneCurso(curso){
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    return this._http.get(keys.url + `getOne/${curso.idcurso}`, { headers: headers })
  }
}
