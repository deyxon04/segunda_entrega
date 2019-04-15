import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { keys } from '../keys'

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  constructor(private _http :HttpClient) { }



  nggetCursosDocente(id) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    return this._http.get(keys.url + 'getcursosPorDocente/' + id, { headers: headers })
  }
}
