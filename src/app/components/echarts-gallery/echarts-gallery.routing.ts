import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { EChartsGalleryComponent } from './echarts-gallery.component';

import { PieComponent } from './echarts-pie.component';
import { BarComponent } from './echarts-bar.component';
import { ScatterComponent } from './echarts-scatter.component';
import { MapComponent } from './echarts-map.component';
import { MapPMComponent } from './echarts-map-pm.component';

const EchartsGalleryRoutes: Routes = [
    {
        path: '',
        component: EChartsGalleryComponent,
        children: [
            { path: 'pie', component: PieComponent },
            { path: 'bar', component: BarComponent },
            { path: 'map', component: MapComponent },
            { path: 'scatter', component: ScatterComponent },
            { path: 'map-pm', component: MapPMComponent },
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(EchartsGalleryRoutes)],
    exports: [RouterModule]
})

export class EChartsGalleryRoutingModule { }

