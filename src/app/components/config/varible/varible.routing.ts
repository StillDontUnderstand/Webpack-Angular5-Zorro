import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { VaribleComponent } from './varible.component';

const varibleRoute:Routes = [
  // {
  //   path: '', 
  //   component: VaribleComponent,
  //   children:[
      { path: '', component: VaribleComponent },    
      { path: ':id', component: VaribleComponent },
  //   ]
  // },
  
]


@NgModule({
  imports: [RouterModule.forChild(varibleRoute)],
  exports: [RouterModule]
})
export class VaribleRoutingModule {

}