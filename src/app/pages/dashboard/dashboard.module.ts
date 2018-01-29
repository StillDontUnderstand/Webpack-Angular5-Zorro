import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd'
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard.routing'
import { DashboardComponent } from './dashboard.component'
import { NzDemoCardBorderComponent } from '../../components/card.component'

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        NgZorroAntdModule,
        FormsModule
    ],
    declarations: [
        DashboardComponent,
        NzDemoCardBorderComponent
    ],
    exports: [
        DashboardComponent
    ]
})

export class DashboardModule {

}