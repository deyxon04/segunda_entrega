import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AspiranteComponent } from './aspirante/aspirante.component';
import { ComponentsRouting } from './components.routing';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { DetalleCursosComponent } from './coordinador/detalle-cursos.component';
import { DetalleCursosDocenteComponent } from './docente/detalle-cursos-docente.component';

@NgModule({
  declarations: [
    AspiranteComponent,
    HomeComponent,
    CursosComponent,
    DetalleCursosComponent,
    DetalleCursosDocenteComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRouting
  ],
  exports:[]
})
export class ComponentsModule { }
