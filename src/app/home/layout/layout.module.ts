import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { LayoutRoutingModule } from './layout.routing';
import { LayoutComponent } from './layout.component';

// import {MbCcComponent} from '../mb-cc/mb-cc.component';
import { MbCcRtuserComponent } from '../mb-cc-rtuser/mb-cc-rtuser.component';
// import { DevlogModule } from '../../components/system/devlog/devlog.module'
import { NotFoundComponent } from './notFound.component';

console.info("layoutModule in running...")
@NgModule({
  declarations: [
    LayoutComponent,
    // MbCcComponent,
    MbCcRtuserComponent,
    NotFoundComponent
  ],
  exports: [LayoutComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgZorroAntdModule,
    //路由单独注入的情况，注意先后顺序
    // DevlogModule,
    LayoutRoutingModule,
  ],
})
export class LayoutModule {

}