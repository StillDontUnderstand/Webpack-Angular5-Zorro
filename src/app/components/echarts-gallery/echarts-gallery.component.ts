import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import * as ECharts from 'echarts';
import { DataService } from '../../service/data.service'
@Component({
    template: `
        <div class="gallery" nz-row >
            <div nz-col [nzSpan]="4" *ngFor="let s of src">
                <nz-demo-card-flex [src]="s"></nz-demo-card-flex>
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
        #main {
            width: 1200px;
            height: 550px;
        }
        .gallery{
            margin:2 0px 20px 0px 20px;
        }
    `]
})

export class EChartsGalleryComponent implements AfterViewInit, OnInit {
    private timer
    constructor(private router: Router, private dataService: DataService) { }
    ngOnInit() {
        this.dataService.getData().subscribe(data => this.timer = data);

        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                console.info('子路由开始');
                //销毁TimeInterval
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
    private src = [
        { link: 'pie', title: 'Pie', url: require('./pie.png') },
        { link: 'bar', title: 'Bar', url: require('./pie.png') },
        { link: 'scatter', title: 'Scatter', url: require('./pie.png') },
        { link: 'map', title: 'Map', url: require('./pie.png') },
        { link: 'map-pm', title: 'PM2.5', url: require('./pie.png') },
        { link: 'layer', title: 'layer', url: require('./pie.png') },
    ]
}