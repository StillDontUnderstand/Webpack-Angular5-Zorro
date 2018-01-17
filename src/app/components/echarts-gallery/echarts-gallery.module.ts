import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgZorroAntdModule } from 'ng-zorro-antd'
import { FormsModule } from '@angular/forms';

import { EChartsGalleryRoutingModule } from './echarts-gallery.routing';
import { EChartsGalleryComponent } from './echarts-gallery.component';
import { PieComponent} from './echarts-pie.component';

@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        FormsModule,
        EChartsGalleryRoutingModule
    ],
    declarations: [
        EChartsGalleryComponent,
        PieComponent
    ],
    exports: [
        EChartsGalleryComponent
    ]

})

export class EChartsGalleryModule { }