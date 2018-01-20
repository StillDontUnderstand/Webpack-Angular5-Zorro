import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as G6 from '@antv/g6';

import { NzNotificationService } from 'ng-zorro-antd';
import { Registed } from './graph-editor-shape';
import { EditorInit, ToolInit } from './graph-editor-core';

@Component({
    template: `
    <div id = "graph" ></div>
    <div id = "anchor" >
        <div class="notShow" id="toolBar">
            <button id="customNode1">自定义形1</button>
            <button id="customNode2">自定义形2</button>
            <button id="customNode3">自定义形3</button>
            <button id="customNode4">自定义形4</button>
            <button id="drag">拖拽模式</button>
            <button id="edit">编辑模式</button>
            <button id="default">默认模式</button>
            <button id="save">保存</button>
            <div class="after"></div>
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
        #anchor>button{
            position:fixed;
            z-index: 100;            
        }
        #anchor{

        }
        #toolBar{
            position: absolute;
            height: 100%;
            width:240px;
            top: 0px;
            transition: all 1s ease-in-out;
        }
        
        #toolBar::before{
            position: absolute;
            content: "";
            backdrop-filter: blur(1px);
            top: 0px;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background: #b5b5b52b;
            z-index: -1;
        }
        .after{
            position: absolute;
            content: "";
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            right: -7px;
            height: 100%;
            top: 0px;
            width: 7px;
            background: #5484b3;
            box-shadow: 2px 0px 3px 1px #4040406b;
        }
        .isShow{
            left:-17px;
            z-index:100;
        }
        .notShow{
            left:-256px;
            z-index:-1;          
        }
        @keyframes pull{
            from {top:0px;}
            to {top:200px;}
        }        
    `]
})

export class GraphEditorComponent implements AfterViewInit {
    // private a = Registed.Shape1;
    // private b = Registed.Shape2;
    private show = false;
    showToolBar = () => {
        var toolBar = document.getElementById('toolBar')
        var classList = toolBar.classList
        if (!classList.contains('isShow')) {
            classList.add('isShow');
            classList.remove('notShow');

        } else {
            classList.remove('isShow');
            classList.add('notShow');
        }
    }
    private c = Registed;
    NgOnInit() {

    }
    ngAfterViewInit() {
        //屏蔽默认右键事件
        document.oncontextmenu = function (e) {
            e.preventDefault();
        };

        const net = EditorInit("graph");


        // net.tooltip(true);
        // net.node().tooltip('id');

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
                    shape: 'smoothArrow'
                });
            }
        });
        net.on('dblclick', function (ev) {
            console.info("鼠标双击");
        });
        net.on('contextmenu', function (ev) {
            console.info("鼠标右键");
        });
    }
}




