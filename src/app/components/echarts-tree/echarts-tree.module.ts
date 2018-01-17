import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgZorroAntdModule } from 'ng-zorro-antd'
import { FormsModule } from '@angular/forms';

import { EChartsTreeRoutingModule } from './echarts-tree.routing'
import { EChartsTreeComponent } from './echarts-tree.component';

@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        FormsModule,
        EChartsTreeRoutingModule
    ],
    declarations: [
        EChartsTreeComponent
    ],
    exports: [
        EChartsTreeComponent
    ]

})

export class EChartsTreeModule { }