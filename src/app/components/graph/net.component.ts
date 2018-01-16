import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as G6 from '@antv/g6';
// declare var G6: any

@Component({
    selector: 'g6-net',
    template: `<div id="anchor"><div>`,
})

export class NetComponent implements AfterViewInit {
    customNode1 = new G6.registerNode('customNode1', {
        draw(cfg, group) {
            const shape = group.addShape('rect', {
                attrs: {
                    x: cfg.x - 40,
                    y: cfg.y - 40,
                    width: 80,
                    height: 80,
                    fill: '#fff',
                    stroke: 'green'
                }
            });
            return shape;
        },
        getAnchorPoints() {
            return [
                [0, 0.25],
                [0, 0.5],
                [0, 0.75],
                [1, 0.25],
                [1, 0.5],
                [1, 0.75],
                [0.25, 0],
                [0.5, 0],
                [0.75, 0],
                [0.25, 1],
                [0.5, 1],
                [0.75, 1]
            ];
        }
    }, 'rect');
    customNode2 = new G6.registerNode('customNode2', {
        draw(cfg, group) {
            const shape = group.addShape('rect', {
                attrs: {
                    x: cfg.x - 40,
                    y: cfg.y - 40,
                    width: 80,
                    height: 80,
                    fill: '#fff',
                    stroke: 'red'
                }
            });
            return shape;
        }
    }, 'customNode1');


    data = {
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

    // net: any;
    NgOnInit() {
    }
    // width: number = this.nzContent.offsetWidth;
    // height: number = this.nzContent.offsetHeight;
    ngAfterViewInit() {

        // console.info(document.querySelector('#graph'));
        const anchor: any = document.querySelector('#anchor')
        anchor.innerHTML = '<div id="toolBar" style="position: absolute;z-index: 10"></div>';
        const toolBar: any = document.querySelector('#toolBar');
        toolBar.innerHTML += '<button id="addCustom1">自定义形1</button>';
        toolBar.innerHTML += '<button id="addCustom2">自定义形2</button>';
        toolBar.innerHTML += '<button id="addSmooth">添加曲线</button>';
        toolBar.innerHTML += '<button id="addLine">添加直线</button>';
        toolBar.innerHTML += '<button id="drag">拖拽模式</button>';
        toolBar.innerHTML += '<button id="edit">编辑模式</button>';
        toolBar.innerHTML += '<button id="save">保存</button>';

        const addCustom1: any = document.querySelector('#addCustom1');
        const addCustom2: any = document.querySelector('#addCustom2');
        const drag: any = document.querySelector('#drag');
        const edit: any = document.querySelector('#edit');
        const addLine: any = document.querySelector('#addLine');
        const addSmooth: any = document.querySelector('#addSmooth');
        const save: any = document.querySelector('#save');
        // const net = new G6.Net({
        //   id: 'mountNode',      // 容器ID
        //   mode: 'edit',  // 编辑模式
        //   fitView: 'cc', // 自适应视口为左上
        //   height: window.innerHeight    // 画布高
        // });
        //配置G6画布 事件监听 动态改变
        const net = new G6.Net({
            id: 'graph',      // 容器ID
            fitView: 'cc', // 自适应视口为左上
            mode: 'edit',  // 编辑模式
            width: 1200,    // 画布宽
            height: 710    // 画布高
        });
        addCustom1.onclick = () => {
            console.info("添加自定义图形1")
            net.beginAdd('node', {
                shape: 'customNode1'
            });
        };

        addCustom2.onclick = () => {
            console.info("添加自定义图形2")
            net.beginAdd('node', {
                shape: 'customNode2'
            });
        };

        addLine.onclick = () => {
            net.beginAdd('edge', {
                shape: 'line'
            });
        };

        addSmooth.onclick = () => {
            net.beginAdd('edge', {
                shape: 'smooth'
            });
        };

        drag.onclick = () => {
            net.changeMode('drag');
        };

        edit.onclick = () => {
            net.changeMode('edit');
        };

        save.onclick = () => {
            const saveData = net.save();
            const json = JSON.stringify(saveData, null, 2);
            console.log(saveData, json); // eslint-disable-line no-console
        };

        // // 载入数据
        // net.source(this.data.nodes, this.data.edges);
        // // 渲染关系图
        net.render();
        //铺满content
        const canvas1 = document.getElementById('canvas_1');
        const canvas2 = document.getElementById('canvas_2');
        //  canvas1.style.height = '100%';
        canvas1.style.width = '100%';
        //  canvas2.style.height = '100%';
        canvas2.style.width = '100%';
    }


}