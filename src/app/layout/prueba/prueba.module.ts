import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PruebaRoutingModule } from "./prueba-routing.module";
import { PruebaComponent } from "./prueba.component";
import { PageHeaderModule } from "./../../shared";

@NgModule({
  imports: [
    CommonModule, PruebaRoutingModule, PageHeaderModule
  ],
  declarations: [PruebaComponent]
})
export class PruebaModule { }
