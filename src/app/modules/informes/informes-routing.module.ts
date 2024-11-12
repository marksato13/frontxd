import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformesPagesComponent } from './pages/informes-pages/informes-pages.component';

const routes: Routes = [
  {
    path: '',
  component: InformesPagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformesRoutingModule { }
