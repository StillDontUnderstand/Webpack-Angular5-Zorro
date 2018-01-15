import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { NotFoundComponent } from './notFound.component';
import { DevlogComponent } from '../../components/devlog/devlog.component'


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
        loadChildren: '../../components/varible/varible.module#VaribleModule',
        data: { state: 'varible' }
      },
      {
        path: 'user',
        loadChildren: '../../components/user/user.module#UserModule',
        data: { state: 'user' }
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