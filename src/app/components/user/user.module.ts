import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user.routing'
import { UserComponent } from './user.component'
import { NgZorroAntdModule } from 'ng-zorro-antd'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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