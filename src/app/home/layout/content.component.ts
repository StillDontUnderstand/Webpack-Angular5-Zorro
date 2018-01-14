import { Component, ViewEncapsulation ,HostListener} from '@angular/core';
import { fadeAnimation,tipAnimation } from './fade.animation';

@Component({
    selector: 'root-content',
    encapsulation: ViewEncapsulation.None,
    animations: [fadeAnimation,tipAnimation],    
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
            <nz-footer class="footer" >HF Design ©2018 Implement By Unissoft</nz-footer>
        </nz-layout>

    </nz-layout>
    `,
    styles:[`
        .footer{
            position: fixed;
            padding: 0px;
            color:#663399d9;            
            /* color: #66339912; */
            bottom: 0px;
            left: calc(50% - 34px);
            transition:color 1.5s;
        }
        .footer:hover{
            color: #7e4e9482;            
        }
    `]
})

export class ContentComponent {
    public getRouterOutletState(outlet) {
        // console.info(outlet.isActivated);
        return outlet.isActivated ? outlet.activatedRoute : '';
    }
    @HostListener('document.querySelectorAll("nz-content")[0]','scroll' ['$event'])
    test($event) {
        console.log($event);        
        console.log('通过(scroll)指令监听');
    }
}