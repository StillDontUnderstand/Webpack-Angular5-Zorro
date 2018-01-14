import { Component, ViewEncapsulation, HostListener,OnInit } from '@angular/core';
import { fadeAnimation } from './fade.animation';

@Component({
    selector: 'root-content',
    encapsulation: ViewEncapsulation.None,
    animations: [fadeAnimation],
    template: `
      <nz-layout style="height:100%" >
        <nz-sider nzCollapsible [(nzCollapsed)]="isCollapsed" sider>
            <div class="logo">
            </div>
            <ul nz-menu [nzTheme]="'dark'" [nzMode]="isCollapsed?'vertical':'inline'">
            <li nz-submenu>
                <span title><i class="anticon anticon-user"></i><span class="nav-text">系统</span></span>
                <ul>
                <li nz-menu-item><a routerLink="devlog" routerLinkActive="active">更新日志</a></li>
                </ul>
            </li>
            <li nz-submenu>
                <span title><i class="anticon anticon-api"></i><span class="nav-text" >配置管理</span></span>
                <ul>
                <li nz-menu-item><a routerLink="varible/1" routerLinkActive="active">常量</a></li>
                <li nz-menu-item><a routerLink="varible/2" routerLinkActive="active">计算变量</a></li>
                </ul>
            </li>
            <li nz-submenu>
                <span title><i class="anticon anticon-team"></i><span class="nav-text" >用户管理</span></span>
                <ul>
                <li nz-menu-item><a routerLink="user" routerLinkActive="active">用户</a></li>
                </ul>
            </li>
            </ul>
        </nz-sider>
        <nz-layout (scroll)="test($event)">
            <nz-content [@fadeAnimation]="getRouterOutletState(o)" style="position:relative;" >
                <!--   -->
                    <router-outlet #o="outlet" ></router-outlet>                
            </nz-content>
            <nz-footer class="footer" [style.color]="c">HF Design ©2018 Implement By Unissoft</nz-footer>
        </nz-layout>

    </nz-layout>
    `,
    styles: [`
        .footer{
            position: fixed;
            padding: 0px;
            bottom: 0px;
            left: calc(50% - 34px);
            transition:color 2.5s;
        }
    `]
})

export class ContentComponent implements OnInit{
    c: string = "#66339912";    
    ngOnInit():void {
        // let layout:any = document.querySelectorAll('nz-layout')[2]
        // let component:any =document.querySelectorAll('ng-component')[0]
        // console.info(layout.offsetHeight)
        // console.info(component.offsetHeight)
        // if (layout.offsetHeight > component.offsetHeight){
        //     console.info("!!");
        //     this.c = "#6926a057";
        // }
    }
    
    // footer = document.querySelectorAll('nz-footer')[0]                
    public getRouterOutletState(outlet) {
        // console.info(outlet.isActivated);
        return outlet.isActivated ? outlet.activatedRoute : '';
    }
    // @HostListener('document.querySelectorAll("nz-content")[0]', 'scroll'['$event'])
    test($event) {
        let target = $event.target;
        // console.info("scrollTop",target.scrollTop)
        // console.info("offsetHeight",target.offsetHeight)
        // console.info("offsetHeight",target.scrollHeight-target.offsetHeight)
        let diff = target.scrollHeight - target.offsetHeight
        if (target.scrollTop == diff) {
            // console.log("footer");   
            this.c = "#6926a057";
        }
        if (target.scrollTop == diff-5){
            this.c = "#66339912";
        }
        // console.log('通过(scroll)指令监听');
    }
}