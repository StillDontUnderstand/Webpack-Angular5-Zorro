import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { NotFoundComponent } from './notFound.component';
import { DevlogComponent } from '../../components/devlog/devlog.component'
import { DragComponent } from '../../components/drag/drag.component'


const layoutRoute: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DevlogComponent
      },
      {
        path: 'varible',
        loadChildren: '../../components/varible/varible.module#VaribleModule'
      },
      {
        path: 'user',
        loadChildren: '../../components/user/user.module#UserModule'
      },
      {
        path: 'editor',
        loadChildren: '../../components/graph-editor/graph-editor.module#GraphEditorModule'
      },
      {
        path: 'tree',
        loadChildren: '../../components/graph-tree/graph-tree.module#GraphTreeModule'
      },
      {
        path: 'echarts-tree',
        loadChildren: '../../components/echarts-tree/echarts-tree.module#EChartsTreeModule'
      },
      {
        path: 'echarts-gallery',
        loadChildren: '../../components/echarts-gallery/echarts-gallery.module#EChartsGalleryModule'
      },
      {
        path: 'drag',
        component: DragComponent
      },
      {
        path: '**',
        component: DevlogComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(layoutRoute)
  ],
  exports: [RouterModule],
})
export class LayoutRoutingModule {

}