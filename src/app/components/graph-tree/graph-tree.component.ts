import { Component, AfterViewInit } from '@angular/core'
import * as G6 from '@antv/g6';
import * as ECharts from 'echarts';
@Component({
    template: `
        <div nz-row >
            <div nz-col [nzSpan]="15">
                <div id="mountNode"></div>
            </div>
        </div>
    `,
    styles: [`
        #mountNode {
            position: absolute;
            width: 100%;
            height: 100%;
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

export class GraphTreeComponent implements AfterViewInit {

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
        const tree = new G6.Tree({
            id: 'mountNode',            // 容器ID
            width: 1200,
            height: 710,         // 画布高
            fitView: 'autoZoom', // 自动缩放
            layoutCfg: {
                // direction: 'LR', // 方向（LR/RL/H/TB/BT/V）
                getHGap: function (/* d */) { // 横向间距
                    return 100;
                },
                getVGap: function (/* d */) { // 竖向间距
                    return 10;
                },
            },
        });
        const canvas = document.querySelectorAll('canvas');
        // console.info(canvas);

        canvas[0].style.width = '100%';
        canvas[0].style.height = '100%';
        canvas[1].style.width = '100%';
        canvas[1].style.height = '100%';
        // tree.source(JSON.stringify(this.data));
        tree.source(this.data);
        tree.node()
            .label(function (obj) {
                return obj.name;
            })
            .style({
                fillOpacity: 1
            });
        tree.edge().shape('smooth');
        tree.render();
    }

}