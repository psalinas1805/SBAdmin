import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddacuarioRoutingModule } from "./addacuario-routing.module";
import { AddacuarioComponent } from "./addacuario.component";
import { PageHeaderModule } from "./../../shared";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,FormsModule,ToastrModule.forRoot(),ReactiveFormsModule, AddacuarioRoutingModule, PageHeaderModule
  ],
  declarations: [AddacuarioComponent]
})
export class AddacuarioModule { }
