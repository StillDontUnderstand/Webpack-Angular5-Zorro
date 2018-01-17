import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgZorroAntdModule } from 'ng-zorro-antd'
import { FormsModule } from '@angular/forms';

import { EChartsGalleryRoutingModule } from './echarts-gallery.routing';
import { EChartsGalleryComponent } from './echarts-gallery.component';
import { PieComponent } from './echarts-pie.component';
import { BarComponent } from './echarts-bar.component';
import { ScatterComponent } from './echarts-scatter.component';
import { MapComponent } from './echarts-map.component';
import { MapPMComponent } from './echarts-map-pm.component';

@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        FormsModule,
        EChartsGalleryRoutingModule
    ],
    declarations: [
        EChartsGalleryComponent,
        PieComponent,
        BarComponent,
        ScatterComponent,
        MapComponent,
        MapPMComponent
    ],
    exports: [
        EChartsGalleryComponent
    ]

})

export class EChartsGalleryModule { }