import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphEditorComponent } from './graph-editor.component';

const graphEditorRoute: Routes = [
    { path: '', component: GraphEditorComponent }
]

@NgModule({
    imports: [RouterModule.forChild(graphEditorRoute)],
    exports: [RouterModule]
})


export class GraphEditorRoutingModule { }