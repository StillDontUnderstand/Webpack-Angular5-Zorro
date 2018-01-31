import { NgModule } from '@angular/core/';
import { CommonModule } from '@angular/common'
import { NgZorroAntdModule } from 'ng-zorro-antd'

import { MotionComponent } from './motion.component'
import { RouterModule, Routes } from '@angular/router';

import { FlyMotionComponent } from './fly-motion.component'
import { ListMotionComponent } from './list-motion.component'

const route: Routes = [{ path: '', component: MotionComponent }]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(route),
        NgZorroAntdModule
    ],
    declarations: [
        MotionComponent,
        FlyMotionComponent,
        ListMotionComponent
    ],
    exports: [MotionComponent]
})

export class MotionModule { }

