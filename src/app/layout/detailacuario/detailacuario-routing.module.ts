import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailacuarioComponent } from './detailacuario.component';

const routes: Routes = [
    {
        path: '',
        component: DetailacuarioComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DetailacuarioRoutingModule {}
