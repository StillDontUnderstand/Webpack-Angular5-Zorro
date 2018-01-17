import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd'
import { FormsModule } from '@angular/forms';

import { GraphEditorRoutingModule } from './graph-editor.routing'
import { GraphEditorComponent } from './graph-editor.component';


@NgModule({
    imports: [
        CommonModule,
        GraphEditorRoutingModule,        
        NgZorroAntdModule,
        FormsModule,
    ],
    declarations: [
        GraphEditorComponent,
    ],
    exports: [
        GraphEditorComponent
    ]
})
export class GraphEditorModule { }