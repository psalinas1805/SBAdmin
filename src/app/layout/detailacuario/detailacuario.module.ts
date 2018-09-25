import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DetailacuarioRoutingModule } from "./detailacuario-routing.module";
import { DetailacuarioComponent } from "./detailacuario.component";
import { PageHeaderModule } from "./../../shared";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,DetailacuarioRoutingModule,
    FormsModule, ReactiveFormsModule, PageHeaderModule,NgbModule.forRoot()
  ],
  declarations: [DetailacuarioComponent]
})
export class DetailacuarioModule { }
