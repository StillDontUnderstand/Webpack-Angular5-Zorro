import { Component, AfterViewInit } from '@angular/core'
import * as ECharts from 'echarts';

@Component({
    template: `
        <div nz-row >
            <div nz-col [nzSpan]="15">
                <div id="main"></div>
            </div>
        </div>
    `,
    styles: [`
        #main {
            width: 800px;
            height: 600px;
        }
        :host {
            position: absolute;
            width: calc(100% - 32px);
            min-height: calc(100% - 48px);          
            box-shadow:0px 0px 6px 1px #00000042;
            background: #fff;
            margin: 16px 16px 30px 16px;
            z-index: 50;
            border-radius: 5px;
        }
    `]
})

export class EChartsTreeComponent implements AfterViewInit {

    data: Object = {
        "children":
        [
            {
                "children": [], "name": "@ali/color-cal"
            },
            {
                "children": [], "name": "@ali/g-actived"
            },
            {
                "children": [], "name": "@ali/g-base"
            },
            {
                "children": [
                    { "children": [], "name": "@ali/g-path-util" },
                    { "children": [], "name": "@ali/g-color" },
                    { "children": [], "name": "@ali/g-event" },
                    { "children": [], "name": "@ali/g-interpolation" }
                ],
                "name": "@ali/g-canvas"
            },
            { "children": [], "name": "@ali/g-graph-layout" },
            { "children": [], "name": "@ali/g-math" },
            { "children": [], "name": "@ali/g-matrix" },
            { "children": [], "name": "@ali/g-path-util" },
            {
                "children": [
                    { "children": [], "name": "@ali/g-path-util" }
                ],
                "name": "@ali/g-tween"
            },
            {
                "children": [
                    { "children": [], "name": "@ali/g-util-base" }
                ],
                "name": "@ali/g-util"
            },
            {
                "children": [], "name": "@ali/g2-monitor"
            }],
        "name": "@ali/g6"
    }

    ngAfterViewInit() {
        console.info("开始渲染");
        var myChart = ECharts.init(document.getElementById('main'));
        console.info(myChart);
        // 指定图表的配置项和数据
        // var option = {
        //     title: {
        //         text: 'ECharts 入门示例'
        //     },
        //     tooltip: {},
        //     legend: {
        //         data:['销量']
        //     },
        //     xAxis: {
        //         data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        //     },
        //     yAxis: {},
        //     series: [{
        //         name: '销量',
        //         type: 'bar',
        //         data: [5, 20, 36, 10, 10, 20]
        //     }]
        // };

        // // 使用刚指定的配置项和数据显示图表。
        // myChart.setOption(option);
        myChart.setOption({
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            series: [
                {
                    type: 'tree',
    
                    data: [this.data],
    
                    top: '1%',
                    left: '7%',
                    bottom: '1%',
                    right: '20%',
    
                    symbolSize: 7,
    
                    label: {
                        normal: {
                            position: 'left',
                            verticalAlign: 'middle',
                            align: 'right',
                            fontSize: 9
                        }
                    },
    
                    leaves: {
                        label: {
                            normal: {
                                position: 'right',
                                verticalAlign: 'middle',
                                align: 'left'
                            }
                        }
                    },
    
                    expandAndCollapse: true,
                    animationDuration: 550,
                    animationDurationUpdate: 750
                }
            ]
        });


    }
}