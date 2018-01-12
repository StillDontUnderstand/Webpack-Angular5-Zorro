import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { DevlogRoutingModule } from './devlog.routing.module';
import { DevlogComponent } from './devlog.component';

console.info("DevlogModule in running...")

@NgModule({
  declarations: [DevlogComponent],
  exports: [DevlogComponent,DevlogRoutingModule],
  imports: [
    // FormsModule,
    // ReactiveFormsModule,
    CommonModule,
    NgZorroAntdModule,
    DevlogRoutingModule
  ]
})
export class DevlogModule {

}