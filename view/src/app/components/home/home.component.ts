import { Component, OnInit } from '@angular/core';
import {  Router } from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  public user
  constructor( private _router :Router) {
    this.user = JSON.parse(localStorage.getItem('user'))
   }

  ngOnInit() {
  }

  ngSalir(){
    localStorage.removeItem('user')
    this._router.navigate(['/'])
  }

}
