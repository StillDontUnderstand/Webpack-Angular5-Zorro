import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import * as ECharts from 'echarts';
import { DataService } from '../../service/data.service'
@Component({
    template: `
        <div class="gallery" nz-row >
            <div nz-col [nzSpan]="4">
                <a routerLink="pie" routerLinkActive="active">Pie-Chart</a>
            </div>
            <div nz-col [nzSpan]="4">
                <a routerLink="bar" routerLinkActive="active">Bar</a>
            </div>
            <div nz-col [nzSpan]="4">
                <a routerLink="scatter" routerLinkActive="active">Scatter</a>
            </div>
            <div nz-col [nzSpan]="4">
                <a routerLink="map" routerLinkActive="active">Map</a>
            </div>
            <div nz-col [nzSpan]="4">
                <a routerLink="map-pm" routerLinkActive="active">PM2.5</a>
            </div>
            <div nz-col [nzSpan]="4">
                <a routerLink="layer" routerLinkActive="active">Layer</a>            
            </div>
        </div>
        <div nz-row>
            <div nz-col [nzSpan] = "24">
                <div id="main">
                    <router-outlet></router-outlet>                            
                </div>           
            </div>
        </div>
    `,
    styles: [`
        :host {
            position: absolute;
            width: calc(100% - 32px);
            min-height: calc(100% - 48px);         
            box-shadow:0px 1px 11px 2px #00000059;
            background: #fff;
            margin: 16px 16px 30px 16px;
            z-index: 50;
            border-radius: 5px;
        }
        .gallery>div>a{
            display:block;
            height: 100px;
            margin: 25px;
            box-shadow: 0px 0px 6px 0px #000000b8;
            background-color: white;
            border-radius: 5px;
            transition:all 0.7s;
        }
        .gallery>div>div:hover{
            box-shadow: 0px 0px 12px 0px #000000b8;
        }
        #main {
            width: 1200px;
            height: 550px;
        }
    `]
})

export class EChartsGalleryComponent implements AfterViewInit, OnInit {
    private timer
    constructor(private router: Router, private dataService: DataService) { }
    ngOnInit() {
        this.dataService.getData().subscribe(data => this.timer = data);

        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart){
                console.info('子路由开始');
                this.timer && window.clearInterval(this.timer);
                //销毁ECharts监听事件
                if (document.getElementById('main') && ECharts.getInstanceByDom(document.getElementById('main'))) {
                    console.info('beforeDispose:', ECharts.getInstanceByDom(document.getElementById('main')));
                    ECharts.getInstanceByDom(document.getElementById('main')).dispose();
                    console.info('afterDispose:', ECharts.getInstanceByDom(document.getElementById('main')));
                }
            }
            if (event instanceof NavigationEnd) {
                console.info('子路由结束');
                //触发路由切换动画

            }
        })
    }
    ngAfterViewInit() { }

}