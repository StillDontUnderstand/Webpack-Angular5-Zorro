import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { NotFoundComponent } from './notFound.component';
import { DevlogComponent } from '../../pages/devlog/devlog.component'
import { DragComponent } from '../../pages/drag/drag.component'


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
        loadChildren: '../../pages/varible/varible.module#VaribleModule'
      },
      {
        path: 'user',
        loadChildren: '../../pages/user/user.module#UserModule'
      },
      {
        path: 'editor',
        loadChildren: '../../pages/graph-editor/graph-editor.module#GraphEditorModule'
      },
      {
        path: 'tree',
        loadChildren: '../../pages/graph-tree/graph-tree.module#GraphTreeModule'
      },
      {
        path: 'echarts-tree',
        loadChildren: '../../pages/echarts-tree/echarts-tree.module#EChartsTreeModule'
      },
      {
        path: 'echarts-gallery',
        loadChildren: '../../pages/echarts-gallery/echarts-gallery.module#EChartsGalleryModule'
      },
      {
        path: 'drag',
        component: DragComponent
      },
      {
        path: 'dashboard',
        loadChildren: '../../pages/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'motion',
        loadChildren: '../../pages/motion/motion.module#MotionModule'
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