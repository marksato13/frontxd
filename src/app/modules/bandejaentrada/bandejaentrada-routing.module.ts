import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandejaentradaPagesComponent } from './pages/bandejaentrada-pages/bandejaentrada-pages.component';

const routes: Routes = [
{
  path: '',
component: BandejaentradaPagesComponent
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BandejaentradaRoutingModule { }
