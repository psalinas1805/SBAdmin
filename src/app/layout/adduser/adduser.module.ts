import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdduserRoutingModule } from "./adduser-routing.module";
import { AdduserComponent } from "./adduser.component";
import { PageHeaderModule } from "./../../shared";

@NgModule({
  imports: [
    CommonModule, AdduserRoutingModule, PageHeaderModule
  ],
  declarations: [AdduserComponent]
})
export class AdduserModule { }
