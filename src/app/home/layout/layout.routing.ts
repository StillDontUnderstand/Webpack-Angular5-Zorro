import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { NotFoundComponent } from './notFound.component';
import { DevlogComponent} from '../../components/devlog/devlog.component'


const layoutRoute: Routes = [
  {
    path: '', 
    component: LayoutComponent, 
    children: [
      {
        path: 'devlog',
        component:DevlogComponent
      },
      {
        path: 'varible',
        loadChildren: '../../components/varible/varible.module#VaribleModule'
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