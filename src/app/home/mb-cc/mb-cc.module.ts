import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import {MbCcRoutingModule} from './mb-cc.routing.module';
import {MbCcComponent} from './mb-cc.component';

console.info("MbCcModule in running")
@NgModule({
  declarations: [ MbCcComponent ],
  exports: [MbCcComponent],
  imports     : [ 
    FormsModule,
    ReactiveFormsModule,
    CommonModule, 
    NgZorroAntdModule,
    MbCcRoutingModule 
  ]
})
export class MbCcModule {

}