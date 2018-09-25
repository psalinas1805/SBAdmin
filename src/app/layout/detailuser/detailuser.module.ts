import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailuserRoutingModule } from "./detailuser-routing.module";
import { DetailuserComponent } from "./detailuser.component";
import { PageHeaderModule } from "./../../shared";

@NgModule({
  imports: [
    CommonModule,DetailuserRoutingModule, PageHeaderModule
  ],
  declarations: [DetailuserComponent]
})
export class DetailuserModule { }
