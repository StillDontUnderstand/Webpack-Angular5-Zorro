import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgZorroAntdModule } from 'ng-zorro-antd'
import { FormsModule } from '@angular/forms';

import { GraphTreeRoutingModule } from './graph-tree.routing'
import { GraphTreeComponent } from './graph-tree.component';

@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        FormsModule,
        GraphTreeRoutingModule
    ],
    declarations: [
        GraphTreeComponent
    ],
    exports: [
        GraphTreeComponent
    ]

})

export class GraphTreeModule { }