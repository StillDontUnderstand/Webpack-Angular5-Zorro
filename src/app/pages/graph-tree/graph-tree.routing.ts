import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { GraphTreeComponent } from './graph-tree.component';

const GraphTreeRoutes: Routes = [
    {
        path: '', component: GraphTreeComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(GraphTreeRoutes)],
    exports: [RouterModule]
})

export class GraphTreeRoutingModule { }

