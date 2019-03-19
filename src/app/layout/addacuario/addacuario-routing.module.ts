import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddacuarioComponent } from "./addacuario.component";

const routes: Routes = [
    {
        path: '', 
        component: AddacuarioComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddacuarioRoutingModule {
}
