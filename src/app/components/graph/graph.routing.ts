import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphComponent } from './graph.component';


const graphRoute: Routes = [
    { path: '', component: GraphComponent }
]

@NgModule({
    imports: [RouterModule.forChild(graphRoute)],
    exports: [RouterModule]
})



export class GraphRoutingModule { }