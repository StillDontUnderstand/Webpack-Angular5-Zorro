import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { EChartsTreeComponent } from './echarts-tree.component';

const EchartsTreeRoutes: Routes = [
    {
        path: '', component: EChartsTreeComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(EchartsTreeRoutes)],
    exports: [RouterModule]
})

export class EChartsTreeRoutingModule { }

