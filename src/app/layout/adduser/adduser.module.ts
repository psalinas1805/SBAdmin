import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdduserRoutingModule } from "./adduser-routing.module";
import { AdduserComponent } from "./adduser.component";
import { PageHeaderModule } from "./../../shared";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,FormsModule,ToastrModule.forRoot(),ReactiveFormsModule, AdduserRoutingModule, PageHeaderModule
  ],
  declarations: [AdduserComponent]
})
export class AdduserModule { }
