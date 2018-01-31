import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { VaribleRoutingModule } from './varible.routing';
import { VaribleComponent } from './varible.component';
// //复用部分
import { CommonModal } from './common-modal.component';
import { CommonModalContent } from './common-modal-content.component';
import { CommonTableComponent } from './common-table.component';

import { NgTree } from "ng.tree";

console.info("VaribleModule in running...")

@NgModule({
  declarations: [
    VaribleComponent,
    CommonModal,
    CommonModalContent,
    CommonTableComponent,
    NgTree,
  ],
  exports: [VaribleComponent],
  imports: [
    FormsModule,
    NgZorroAntdModule,    
    ReactiveFormsModule,
    CommonModule,
    VaribleRoutingModule, 
  ],
  //可以在根路由引入
  entryComponents: [
    NgTree
  ]
})
export class VaribleModule {

}