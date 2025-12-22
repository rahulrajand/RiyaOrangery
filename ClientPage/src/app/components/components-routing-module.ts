import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPage } from './first-page/first-page';


const routes: Routes = [
    {path: '', redirectTo: 'fpage', pathMatch: 'full'},
    {path : 'fpage', component: FirstPage},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ComponentsRoutingModule {}