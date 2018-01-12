import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DevlogComponent } from './devlog.component';
//反向注入
// import { LayoutComponent } from '../../../home/layout/layout.component'

const devLogRoute = [
  {
    path: '',
    component: DevlogComponent,
  },
]



@NgModule({
  imports: [RouterModule.forChild(devLogRoute)],
  exports: [RouterModule]
})
export class DevlogRoutingModule {

}