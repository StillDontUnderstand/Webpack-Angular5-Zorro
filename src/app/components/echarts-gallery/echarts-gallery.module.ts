import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgZorroAntdModule } from 'ng-zorro-antd'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EChartsGalleryRoutingModule } from './echarts-gallery.routing';
import { EChartsGalleryComponent } from './echarts-gallery.component';
import { PieComponent } from './echarts-pie.component';
import { BarComponent } from './echarts-bar.component';
import { ScatterComponent } from './echarts-scatter.component';
import { MapComponent } from './echarts-map.component';
import { MapPMComponent } from './echarts-map-pm.component';
import { LayerComponent } from './echarts-layer.component';
import { NzDemoCardFlexComponent } from './echarts-gallery-card.component'

@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        FormsModule,
        ReactiveFormsModule,
        EChartsGalleryRoutingModule
    ],
    declarations: [
        EChartsGalleryComponent,
        PieComponent,
        BarComponent,
        ScatterComponent,
        MapComponent,
        MapPMComponent,
        LayerComponent,
        NzDemoCardFlexComponent
    ],
    exports: [
        EChartsGalleryComponent
    ]

})

export class EChartsGalleryModule { }