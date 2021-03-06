import { Component, ViewEncapsulation,  OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { fadeAnimation } from '../../animations/fade.animation';
import * as ECharts from 'echarts';
import { DataService } from '../../service/data.service'

@Component({
    selector: 'root-content',
    encapsulation: ViewEncapsulation.None,
    animations: [fadeAnimation],
    providers: [DataService],
    template: `
      <nz-layout style="height:100%" >
        <nz-sider nzCollapsible [(nzCollapsed)]="isCollapsed" sider style="box-shadow: rgba(0, 0, 0, 0.45) 0px 0px 4px 0px;">
            <div class="logo">
            </div>
            <ul nz-menu [nzTheme]="'dark'" [nzMode]="isCollapsed?'vertical':'inline'">
            <li nz-submenu>
                <span title><i class="anticon anticon-desktop"></i><span class="nav-text">系统</span></span>
                <ul>
                    <li nz-menu-item><a routerLink="devlog" routerLinkActive="active">更新日志</a></li>
                    <li nz-menu-item><a routerLink="dashboard" routerLinkActive="active">Dashboard</a></li>
                </ul>
            </li>
            <li nz-submenu>
                <span title><i class="anticon anticon-api"></i><span class="nav-text" >动态路由</span></span>
                <ul>
                <li nz-menu-item><a routerLink="varible/1" routerLinkActive="active">异步加载1</a></li>
                <li nz-menu-item><a routerLink="varible/2" routerLinkActive="active">异步加载2</a></li>
                </ul>
            </li>
            <li nz-submenu>
                <span title><i class="anticon anticon-tool"></i><span class="nav-text" >一些功能</span></span>
                <ul>
                    <li nz-menu-item><a routerLink="user" routerLinkActive="active">表单筛选</a></li>
                    <li nz-menu-item><a routerLink="drag" routerLinkActive="active">拖拽功能</a></li>
                </ul>
            </li>
            <li nz-submenu>
                <span title><i class="anticon anticon-dot-chart"></i><span class="nav-text" >Graph</span></span>
                <ul>
                    <li nz-menu-item><a routerLink="editor" routerLinkActive="active">Editor</a></li>
                    <li nz-menu-item><a routerLink="tree" routerLinkActive="active">Tree</a></li>
                    <li nz-menu-item><a routerLink="echarts-tree" routerLinkActive="active">ECharts-Tree</a></li>
                    <li nz-menu-item><a routerLink="echarts-gallery" routerLinkActive="active">ECharts-Gallery</a></li>
                </ul>
            </li>
            <li nz-submenu>
                <span title><i class="anticon anticon-dot-chart"></i><span class="nav-text" >动效</span></span>
                <ul>
                    <li nz-menu-item><a routerLink="motion" routerLinkActive="active">Motion</a></li>
                </ul>
            </li>
            </ul>
        </nz-sider>
        <nz-layout>
            <nz-content [@fadeAnimation]="routerStateCode"  > <!--(scroll)="scrollHandler($event)"-->
                <router-outlet></router-outlet>                           
            </nz-content>
            <nz-footer class="footer" [style.color]="'#5d5db100'">HF Design ©2018 Implement By Albert</nz-footer>
        </nz-layout>
    </nz-layout>
    `,
    styles: [`
        @keyframes breath{
             0% {
                 opacity: 1;
                 color :#5d5db100;
                }
                20%{
                 color :#5d5db114;  
                }
            50%{ 
                opacity:1;
                color:#5d5db154;
            }
            60%{ 
                opacity:1;
                color:#5d5db194;
            }
            100% { 
                    opacity: 1; 
                    color:#5d5db100;
                }
        }
        .footer{
            position: fixed;
            padding: 0px;
            bottom: 0px;
            left: calc(50% - 34px);
            transition:color 1.2s;
            font-size: 12px;
            animation:breath 7.5s infinite cubic-bezier(0.18, 0.4, 0.86, 0.63);;
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
        nz-content ng-component{
            position: absolute;
            width: calc(100% - 32px);
            min-height: calc(100% - 48px);          
            box-shadow: 0px 0px 6px 1px rgba(0,0,0,.26);
            background: #fff;
            margin: 16px 16px 30px 16px;
            z-index: 50;
            border-radius: 5px;
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
            if (event instanceof NavigationStart && nzContent) {
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
    // c: string = "#66339912";
    // 通过(scroll)指令监听 设置footer颜色改变
    // scrollHandler($event) {
    //     let target = $event.target;
    //     let diff = target.scrollHeight - target.offsetHeight
    //     if (target.scrollTop == diff) {
    //         console.log("footer");
    //         this.c = "#6926a057";
    //     }
    //     if (target.scrollTop == diff - 20 || target.scrollTop == 0) {
    //         this.c = "#66339912";
    //     }
    // }
}