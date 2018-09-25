import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailuserComponent } from './detailuser.component';

const routes: Routes = [
    {
        path: '',
        component: DetailuserComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DetailuserRoutingModule {}
