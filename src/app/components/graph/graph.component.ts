import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as G6 from '@antv/g6';

import { NzNotificationService } from 'ng-zorro-antd';

@Component({
    template: `
    <div id="graph"></div>
    <div id = "anchor"></div>
    `,
    styles: [`
        .graph {
            position: absolute;
            width: 100%;
            height: 100%;
        }
        
        :host {
            position: absolute;
            width: calc(100% - 32px);
            min-height: calc(100%);          
            box-shadow:0px 1px 11px 2px #00000059;
            background: #fff;
            margin: 16px 16px 30px 16px;
            z-index: 50;
            border-radius: 5px;
        }
    `]
})

export class GraphComponent implements AfterViewInit {
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
                    radius: 5,
                    shadowBlur: 20,
                    shadowColor: '#00000094',
                    fill: 'white',
                    stroke: 'white'
                }
            });

            const shape2 = group.addShape('rect', {
                attrs: {
                    x: cfg.x - 40,
                    y: cfg.y - 40,
                    width: 80,
                    height: 80,
                    radius: 5,
                    fill: 'white',
                    stroke: 'white'
                }
            });
            shape2.animate(
                {
                    fill: '#78adf7',
                    stroke: '#78adf7'
                },
                500,
                'ease-in'
            );
            shape.animate(
                {
                    shadowBlur: 30,
                },
                500,
                'ease-in'
            );
            group.addShape('text', {
                attrs: {
                    x: cfg.x - 40,
                    y: cfg.y - 25,
                    fill: '#333',
                    text: '自定义节点'
                }
            });
            return shape




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
        anchor.innerHTML = '<div id="toolBar" style="position: fixed;z-index: 10;top:80px;"></div>';
        const toolBar: any = document.querySelector('#toolBar');
        toolBar.innerHTML += '<button id="addCustom1">自定义形1</button>';
        toolBar.innerHTML += '<button id="addCustom2">自定义形2</button>';
        toolBar.innerHTML += '<button id="addSmooth">添加曲线</button>';
        toolBar.innerHTML += '<button id="addLine">添加直线</button>';
        toolBar.innerHTML += '<button id="drag">拖拽模式</button>';
        toolBar.innerHTML += '<button id="edit">编辑模式</button>';
        toolBar.innerHTML += '<button id="default">默认模式</button>';
        toolBar.innerHTML += '<button id="test">测试</button>';
        toolBar.innerHTML += '<button id="save">保存</button>';



        const addCustom1: any = document.querySelector('#addCustom1');
        const addCustom2: any = document.querySelector('#addCustom2');
        const drag: any = document.querySelector('#drag');
        const edit: any = document.querySelector('#edit');
        const addLine: any = document.querySelector('#addLine');
        const addSmooth: any = document.querySelector('#addSmooth');
        const default_: any = document.querySelector('#default');
        const test: any = document.querySelector('#test');
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
            // fitView: 'autoZoom', // 自适应
            modes: {
                default: ['dragNode', 'clickActive', 'dragEdge', 'dragBlank', 'clickBlankClearActive'],
                drag: ['shortcut', 'dragCanvas', 'wheelZoom'],
                add: ['clickAddNode', 'dragAddEdge', 'hoverAnchorSetActived', 'hoverNodeShowAnchor'],
                edit: [
                    'dragNode', 'dragEdge', 'clickBlankClearActive', 'resizeEdge', 'clickActive', 'dragNodeEndSetActive',
                    'multiSelect', 'resizeNode', 'shortcut', 'wheelZoom', 'hoverNodeShowAnchor', 'hoverAnchorSetActived', 'dragEdgeEndHideAnchor', 'dragNodeEndHideAnchor'
                ]
            },
            animate: true,
            mode: 'edit',  // 编辑模式
            width: 1200,    // 画布宽
            height: 780    // 画布高
        });

        // 载入数据
        // net.source(this.data.nodes, this.data.edges);
        // 渲染关系图
        net.render();
        //铺满content 不能通过id获取，id是动态生成的
        const canvas = document.querySelectorAll('canvas');
        // console.info(canvas);

        canvas[0].style.width = '100%';
        canvas[1].style.width = '100%';

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
            console.info("添加直线")
            canvas[1].onclick = () => {
                net.beginAdd('edge', {
                    shape: 'arrow'
                });
            }
        };

        addSmooth.onclick = () => {
            console.info("添加曲线")
            canvas[1].onclick = () => {
                net.beginAdd('edge', {
                    shape: 'smoothArrow'
                });
            }
        };

        drag.onclick = () => {
            console.info("切换到拖拽模式")
            canvas[1].onclick = () => {
                return
            }
            net.changeMode('drag');
        };

        edit.onclick = () => {
            console.info("切换到编辑模式")
            canvas[1].onclick = () => {
                return
            }
            net.changeMode('edit');
        };

        default_.onclick = () => {
            console.info("切换到默认模式")
            canvas[1].onclick = () => {
                return
            }
            net.changeMode('default');
        }
        test.onclick = () => {
            console.info(net.invertPoint(net.converPoint(canvas[1])))
            console.info(net.invertPoint(canvas[1]))

            var ctx = net.getContext("2d");
            ctx.shadowBlur = 20;
            ctx.shadowColor = "black";
            ctx.fillStyle = "blue";
            ctx.fillRect(20, 20, 100, 80);
            net.refresh
        }
        save.onclick = () => {
            console.info("保存")
            const saveData = net.save();
            const json = JSON.stringify(saveData, null, 2);
            console.log(saveData, json); // eslint-disable-line no-console
        };
    }


}


