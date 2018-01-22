import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { GraphEditorRoutingModule } from './graph-editor.routing'
import { GraphEditorComponent } from './graph-editor.component';
import { NzDemoFormDynamicComponent } from './graph-editor-panel.component'

@NgModule({
    imports: [
        CommonModule,
        GraphEditorRoutingModule,
        NgZorroAntdModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        GraphEditorComponent,
        NzDemoFormDynamicComponent,
    ],
    exports: [
        GraphEditorComponent
    ]
})
export class GraphEditorModule { }