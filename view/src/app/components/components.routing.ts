import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../pages/main/main.component';
import { AspiranteComponent } from './aspirante/aspirante.component';
import { HomeComponent } from './home/home.component';
import { CoordinadorComponent } from './coordinador/coordinador.component';
import { DocenteComponent } from './docente/docente.component';
import { CursosComponent } from './cursos/cursos.component';
import { DetalleCursosComponent } from './coordinador/detalle-cursos.component';
import { DetalleCursosDocenteComponent } from './docente/detalle-cursos-docente.component';

const routes: Routes = [
    {
        path: 'main', component: MainComponent, children: [
            {
                path: "home", component: HomeComponent, children: [
                    {
                        path: "coordinador", component: CoordinadorComponent, children: [
                        ]
                    },
                    { path: "docente", component: DocenteComponent },
                    { path: "aspirante", component: AspiranteComponent },
                    { path: "cursos", component: CursosComponent },
                    { path: "cursos-disponibles", component: DetalleCursosComponent },
                    { path: "cursos-docente", component: DetalleCursosDocenteComponent },
                ]
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRouting { }
