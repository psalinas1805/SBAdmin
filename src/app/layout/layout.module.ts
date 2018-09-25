import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
//import { PruebaComponent } from './prueba/prueba.component';
//import { AdduserComponent } from './adduser/adduser.component';
import { ToastrModule } from 'ngx-toastr';
//import { DetailuserComponent } from './detailuser/detailuser.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,FormsModule, ReactiveFormsModule,
        NgbDropdownModule.forRoot(), ToastrModule.forRoot(),

    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent]
})
export class LayoutModule {}
