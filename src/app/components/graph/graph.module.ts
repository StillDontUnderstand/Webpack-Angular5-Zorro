import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd'
import { FormsModule } from '@angular/forms';

import { GraphRoutingModule } from './graph.routing'
import { GraphComponent } from './graph.component';



@NgModule({
    imports: [
        CommonModule,
        GraphRoutingModule,        
        NgZorroAntdModule,
        FormsModule,
    ],
    declarations: [
        GraphComponent
    ],
    exports: [
        GraphComponent
    ]
})
export class GraphModule { }