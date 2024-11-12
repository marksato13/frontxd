import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { ContenidoinicioComponent } from '../inicio/pages/contenidoinicio/contenidoinicio.component';
import { PerfilPagesComponent } from '../perfil/pages/perfil-pages/perfil-pages.component';
import { InformesModule } from '../informes/informes.module';


const routes: Routes = [
  { path: 'inicio', component: ContenidoinicioComponent },

  { path: 'perfil', component: PerfilPagesComponent },

  //-------ooooooooooooooooooooooooo-----------
  {
    path:'conveniosconfiroutes',
    loadChildren: ()=> import('../convenios/convenios.module').then((e)=> e.ConveniosModule)
  },
  {
    path:'confiroutes',
    loadChildren: ()=> import('../confi/confi.module').then((e)=> e.ConfiModule)
  },

  {
    path:'informeroutes',
    loadChildren: ()=> import('../informes/informes.module').then((e)=> e.InformesModule)
  },
  {
    path:'bandejaentradaroutes',
    loadChildren: ()=> import('../bandejaentrada/bandejaentrada.module').then((e)=> e.BandejaentradaModule)
  },
  {
    path:'procesosroutes',
    loadChildren: ()=> import('../procesos/procesos.module').then((e)=> e.ProcesosModule)
  },
  //-------ooooooooooooooooooooooooo-----------






  
  {
    path:'seguriroutes',
    loadChildren: ()=> import('../seguridad/seguridad.module').then((e)=> e.SeguridadModule)
  },




/*
accesosEstudianteProcesos
accesosEstudianteConvenios
accesosEstudianteInformes
accesosEstudianteBandejaEntrada
accesosEstudianteConf




EstudianteConvenios
EstudianteBandejaEntrada
EstudianteInformes
EstudianteConf
*/




 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
