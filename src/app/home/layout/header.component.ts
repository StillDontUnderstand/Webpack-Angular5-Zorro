import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector:'root-header',
    template:`
    <nz-header style="background:#ececec; padding:0;">
        <div style="background-color:#404040;box-shadow: 0px 1px 1px 0px #0000007a, 0px 2px 4px 0px #00000052;">
        <span class="logo" style="color: white;padding: 0px 30px;">大数据前端开发框架演示</span>
        <span style="position: absolute;right: 10px;top: 12px;">
            <nz-avatar [nzShape]="'square'" [nzSize]="'large'" [nzIcon]="'user'" [ngStyle]="{'background-color':'#f56a00'}" ></nz-avatar>          
        </span>

        </div>
    </nz-header>    
    `,
    styles:[`
        :host{
            z-index:100;
        }
    `]
})

export class HeaderComponent {}