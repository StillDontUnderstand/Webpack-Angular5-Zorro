import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { WelcomeRoutingModule } from './welcome.routing.module';
import { WelcomeComponent } from './welcome.component';
import { NzDemoModalAsyncComponent } from './welcome-modal.component';

console.info("WelcomeModule in running...")

@NgModule({
  declarations: [WelcomeComponent, NzDemoModalAsyncComponent],
  exports: [WelcomeComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgZorroAntdModule,
    WelcomeRoutingModule,
  ]
})
export class WelcomeModule {

}