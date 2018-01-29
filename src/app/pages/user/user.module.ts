import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd'
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user.routing'
import { UserComponent } from './user.component'


@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        NgZorroAntdModule,
        FormsModule
    ],
    declarations: [
        UserComponent
    ],
    exports: [
        UserComponent
    ]

})

export class UserModule { }