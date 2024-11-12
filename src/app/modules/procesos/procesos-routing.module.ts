import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcesosPagesComponent } from './pages/procesos-pages/procesos-pages.component';

const routes: Routes = [
  {
    path: '',
  component: ProcesosPagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcesosRoutingModule { }
