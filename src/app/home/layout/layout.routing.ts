import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
// import {MbCcModule} from '../mb-cc/mb-cc.module';
// import {MbCcComponent} from '../mb-cc/mb-cc.component';
import { MbCcRtuserComponent } from '../mb-cc-rtuser/mb-cc-rtuser.component';
import { NotFoundComponent } from './notFound.component';



const layoutRoute: Routes = [
  {
    path: '', 
    component: LayoutComponent, 
    children: [
      {
        path: 'mb-cc',
        loadChildren: '../mb-cc/mb-cc.module#MbCcModule'
        // 'component': MbCcComponent
      },
      {
        'path': 'mb-cc-rtuser',
        component: MbCcRtuserComponent
      },
      {
        path: 'devlog',
        loadChildren: '../../components/system/devlog/devlog.module#DevlogModule'
      },
      {
        path: 'varible',
        loadChildren: '../../components/config/varible/varible.module#VaribleModule'
      },
      {
        path: '**',
        component: NotFoundComponent
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