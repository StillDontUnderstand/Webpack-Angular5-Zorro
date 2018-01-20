import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as G6 from '@antv/g6';

import { NzNotificationService } from 'ng-zorro-antd';
import { Registed } from './graph-editor-shape';
import { EditorInit, ToolInit } from './graph-editor-core';

@Component({
    template: `
    <div id="graph"></div>
    <div id = "anchor">
         <div id="toolBar" style="position: fixed;z-index: 10;top:80px;">
            <button id="customNode1">自定义形1</button>
            <button id="customNode2">自定义形2</button>
            <button id="customNode3">自定义形3</button>
            <button id="customNode4">自定义形4</button>
            <button id="drag">拖拽模式</button>
            <button id="edit">编辑模式</button>
            <button id="default">默认模式</button>
            <button id="test">测试</button>
            <button id="save">保存</button>
        </div>
    </div>
    `,
    styles: [`
        #graph {
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
        .shape3{
            background:red ! important;
            border: green 2px solid;
        }
    `]
})

export class GraphEditorComponent implements AfterViewInit {
    // private a = Registed.Shape1;
    // private b = Registed.Shape2;
    // private v = Registed.Shape3;
    private c = Registed;
    NgOnInit() {

    }
    ngAfterViewInit() {
        //屏蔽默认右键事件
        document.oncontextmenu = function(e){
            e.preventDefault();
        };
        const net = EditorInit("graph");
        console.info("主视图渲染完毕", net);

        net.tooltip(true);     
        net.node().tooltip('id');
        
        net.render();
        ToolInit(net);
        // 鼠标左键按下事件
        net.on('mousedown', function (ev) {
            console.info(ev)
            const shape = ev.shape;
            //点击触点触发连接操作    
            if (shape && shape.hasClass('anchor-point')) {
                console.log(shape.get('index'));
                net.beginAdd('edge', {
                    shape:'smoothArrow'
                });
            }
        });
        net.on('dblclick', function(ev){
            console.info("鼠标双击");
        });
        net.on('contextmenu', function(ev){
            console.info("鼠标右键");            
            
        });
    }
}




