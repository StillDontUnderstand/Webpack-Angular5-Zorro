import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as G6 from '@antv/g6';

import { NzNotificationService } from 'ng-zorro-antd';
import { Registed } from './graph-editor-shape';
import { EditorInit, ToolInit } from './graph-editor-core';

@Component({
    template: `
    <div id = "graph" ></div>
    <div id = "anchor" >
        <div class="toolHide" id="toolBar" >
            <div style="margin:5px 5px 5px 20px;">
                <!--<button id="edit" [nzSize]="'small'" nz-button [nzType]="'primary'" nzGhost>编辑模式</button>
                <button id="drag" [nzSize]="'small'" nz-button [nzType]="'primary'" nzGhost>拖拽模式</button> -->
                <button id="save" [nzSize]="'small'" nz-button [nzType]="'primary'" nzGhost>保存图形</button>
            </div>
            <div class="node" id="customNode3" draggable="true" style="top:150px;left:20px;">
                <span>自定义形3</span>
            </div>
            <div class="node" id="customNode2" draggable="true" style="top:50px;right:20px;">自定义形2</div>            
            <div class="node" id="customNode1" draggable="true" style="top:50px;left:20px;">自定义形1</div>
            <div class="node" id="customNode4" draggable="true" style="top:150px;right:20px;">自定义形4</div>
            <div class="after"></div>
        </div>
        <div id="settingPanel" class="panelHide">
            <nz-demo-form-dynamic></nz-demo-form-dynamic>
        </div>
    </div>  
    `,
    styles: [`
        #graph {
            position: absolute;
            width: 100%;
            height: 100%;
        }
        :host::before {
            position: absolute;
            content: '';
            background-color: #ececec;
            top: 0px;
            left: -16px;
            height: 100%;
            width: 16px;
            z-index: 49;
            box-shadow: -6px 0px 6px -5px #00000042 inset,6px 0px 4px -6px rgba(0, 0, 0, 0.45) inset;
        }
        :host {
            position: absolute;
            width: calc(100% - 32px);
            min-height: calc(100% - 48px);          
            box-shadow:0px 0px 6px 1px #00000042;
            background-color: #fff;
            margin: 16px 16px 30px 16px;
            z-index: 50;
            border-radius: 5px;
        }
        :host::after {
            position: absolute;
            content: '';
            background-color: #ececec;
            top: 0px;
            right: -17px;
            height: 100%;
            width: 16px;
            z-index: 49;
            box-shadow:8px 0px 6px -7px #00000042 inset;
        }
        #anchor>button{
            position:fixed;
            z-index: 100;            
        }
        #toolBar::before{
            position: absolute;
            content: "";
            transition: all 0.5s ease-in-out;
            background-color: #b5b5b52b;
            backdrop-filter: blur(1px);
            top: 0px;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: -1;
        }
        #toolBar{
            position: absolute;
            height: 50%;
            width:240px;
            top: 25%;
            box-shadow: 0px 0px 3px 1px #00000052;
            border-radius: 5px;            
            transition: all 1s ease-in-out;
        }
        #toolBar .after{
            position: absolute;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            right: -1px;
            height: 100%;
            top: 0px;
            width: 8px;
            background-color: #88c0c545;
        }
        .toolShow{
            opciaty:1;
            left:0px;
            z-index:40;
        }
        .toolHide{
            opacity:0;
            left:-233px;         
        }
        #customNode3,#customNode2,#customNode1,#customNode4{
            position:absolute;
            background-color: #fff;
            width: 80px;
            height: 80px;
            border-radius: 5px;
            box-shadow: 0px 0px 9px 0px #00000070;
        }
        #customNode3>span{
            position: absolute;
            width: 100%;
            background-color: #5bbfe8;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        }
        #settingPanel::before{
            position: absolute;
            content: '';
            border-radius: 5px;
            backdrop-filter: blur(1px);
            width: 100%;
            height: 100%;
            background-color: #dadada38;
            top: 0px;
            overflow: hidden;
        }
        #settingPanel{
            position: absolute;
            border-radius: 5px;
            box-shadow: 0px 0px 4px 0px #00000052;
            width: 350px;
            height: 100%;
            transition: all 0.5s ease-in-out;
            padding: 30px 0px 0px 0px;
        }
        .panelShow{
            right: 0px;            
            opacity:1;
        }
        .panelHide{
            right: -360px;
            opacity:0;
        }
    `]
})

export class GraphEditorComponent implements AfterViewInit {
    // private a = Registed.Shape1;
    showToolBar = () => {
        var toolBar = document.getElementById('toolBar')
        var classList = toolBar.classList
        if (!classList.contains('toolShow')) {
            classList.remove('toolHide');
            classList.add('toolShow');

        } else {
            classList.remove('toolShow');
            classList.add('toolHide');
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
            // console.info('mousedown',ev)
            const shape = ev.shape;
            //点击触点触发连接操作    
            if (shape && shape.hasClass('anchor-point')) {
                console.log(shape.get('index'));
                net.beginAdd('edge', {
                    shape: 'smoothArrow'
                });
            }
        });
        // 鼠标左键抬起事件
        // net.on('mouseup', function(ev){
        //     console.info("鼠标左键抬起事件")
        // });         

        net.on('dblclick', function (ev) {
            console.info("鼠标双击", ev);
            console.info(ev.itemType);
            if (ev.itemType == 'node') {
                panelToggle();
            }
        });
        net.on('contextmenu', function (ev) {
            console.info("鼠标右键");
        });


        function panelToggle() {
            const classList = document.getElementById('settingPanel').classList;
            console.info('panelToggle')
            if (classList.contains('panelHide')) {
                classList.remove('panelHide');
                classList.add('panelShow');
            } else {
                classList.remove('panelShow');
                classList.add('panelHide');
            }
        }
    }
}




