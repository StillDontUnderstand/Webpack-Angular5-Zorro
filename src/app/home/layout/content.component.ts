import { Component, ViewEncapsulation,  OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { fadeAnimation } from './fade.animation';
import * as ECharts from 'echarts';
import { DataService } from '../../service/data.service'

@Component({
    selector: 'root-content',
    encapsulation: ViewEncapsulation.None,
    animations: [fadeAnimation],
    providers: [DataService],
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
            <li nz-submenu>
                <span title><i class="anticon anticon-team"></i><span class="nav-text" >Graph</span></span>
                <ul>
                    <li nz-menu-item><a routerLink="editor" routerLinkActive="active">Editor</a></li>
                    <li nz-menu-item><a routerLink="tree" routerLinkActive="active">Tree</a></li>
                    <li nz-menu-item><a routerLink="echarts-tree" routerLinkActive="active">ECharts-Tree</a></li>
                    <li nz-menu-item><a routerLink="echarts-gallery" routerLinkActive="active">ECharts-Gallery</a></li>
                </ul>
            </li>
            </ul>
        </nz-sider>
        <nz-layout>
            <nz-content [@fadeAnimation]="routerStateCode"  (scroll.p)="scrollHandler($event)">
                <router-outlet></router-outlet>                           
            </nz-content>
            <nz-footer class="footer" [style.color]="c">HF Design ©2018 Implement By Albert</nz-footer>
        </nz-layout>
    </nz-layout>
    `,
    styles: [`
        .footer{
            position: fixed;
            padding: 0px;
            bottom: 0px;
            left: calc(50% - 34px);
            transition:color 1.2s;
            font-size: 12px;
            
        }
        nz-content{
            position:relative;
            overflow-y:overlay; 
            overflow-x:hidden;            
        }
        nz-content::-webkit-scrollbar{
            width: 7px;
            background-color: #e8e8e8;
        }
        /*定义滑块，内阴影及圆角*/
        nz-content::-webkit-scrollbar-thumb{
            height: 20px;
            border-radius: 10px;
            background-color: #555;
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
            visibility:hidden;
        }   
        nz-content::-webkit-scrollbar-thumb:hover{
            visibility: visible;            
        }   
        
    `]
})

export class ContentComponent implements OnInit {
    private routerState: boolean = true;
    private routerStateCode: string = 'active';
    private timer: any;
    constructor(router: Router, private dataService: DataService) {
        this.dataService.getData().subscribe(data => this.timer = data);
        router.events.subscribe(event => {
            // 为scroll事件获取对象
            let nzContent = document.querySelectorAll('nz-content')[0];
            //路由结束触发事件
            if (event instanceof NavigationEnd) {
                console.info('路由结束');
                //触发路由切换动画
                this.routerState = !this.routerState;
                this.routerStateCode = this.routerState ? 'active' : 'inactive';

            }
            //路由开始触发事件
            if (event instanceof NavigationStart) {
                console.info('路由开始')
                //设置滚动条回到0点
                this.timer = setTimeout(function () {
                    nzContent.scrollTo(0, 0);
                    //使用完毕立即销毁
                    window.clearTimeout(this.timer);
                }, 650);
                // console.info("setTimeout", this.timer)
            }
        })
    }
    ngOnInit(): void {
    }
    c: string = "#66339912";
    // 通过(scroll)指令监听
    scrollHandler($event) {
        let target = $event.target;
        let diff = target.scrollHeight - target.offsetHeight
        if (target.scrollTop == diff) {
            console.log("footer");
            this.c = "#6926a057";
        }
        if (target.scrollTop == diff - 20 || target.scrollTop == 0) {
            this.c = "#66339912";
        }
    }
}