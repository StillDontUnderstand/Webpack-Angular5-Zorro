import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MbCcComponent } from './mb-cc.component';
console.info("MbCcRoutingModule in running");
@NgModule({
  imports: [ RouterModule.forChild(
    [{ path: '', component: MbCcComponent}]
    ) ],
  exports: [ RouterModule ]
})
export class MbCcRoutingModule {
    
}