import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcesosRoutingModule } from './procesos-routing.module';
import { ConfiRoutingModule } from '../confi/confi-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProcesosRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,  SharedModule
  ]
})
export class ProcesosModule { }
