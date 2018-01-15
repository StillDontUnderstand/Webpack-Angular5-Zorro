import { Component, AfterViewInit } from '@angular/core';
import * as G6 from '@antv/g6';

@Component({
    template: `
        <div id="graph"></div>
    `,
    styles: [`
        p{
            color:red;
        }
        :host {
            position: absolute;
            width: calc(100% - 32px);
            min-height: calc(100% - 48px);          
            box-shadow:0px 1px 11px 2px #00000059;
            background: #fff;
            margin: 16px 16px 32px 16px;
            z-index: 50;
            border-radius: 5px;
        }
        div{
            z-index:-10;
        }

    `]
})
export class GraphComponent implements AfterViewInit {
    nzContent: any = document.querySelectorAll('nz-content')[0]
    width: number = this.nzContent.offsetWidth;
    height: number = this.nzContent.offsetHeight;
    ngAfterViewInit() {
        //设置数据
        const data = {
            "nodes": [
                {
                    "x": 140,
                    "y": 210,
                    "id": "node1"
                },
                {
                    "x": 270,
                    "y": 210,
                    "id": "node2"
                }
            ],
            "edges": [
                {
                    "source": "node1",
                    "id": "edge1",
                    "target": "node2"
                }
            ]
        };
       
        console.info(this.width-32,this.height)
        //配置G6画布
        var net = new G6.Net({
            id: "graph",      // 容器ID
            width: this.width - 232,    // 画布宽
            height: 500    // 画布高
        });
        // 载入数据
        net.source(data.nodes, data.edges);
        // 渲染关系图
        net.render();
    }
}


