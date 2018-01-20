import { NzNotificationService } from 'ng-zorro-antd';
import * as G6 from '@antv/g6';

export const EditorInit = function (container){
    return new G6.Net({
        id: container,      // 容器ID
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
        height: 710,    // 画布高
        grid: {
            forceAlign: true, // 是否支持网格对齐
            cell: 15,         // 网格大小
            line: {           // 网格线样式
              stroke: '#ececec'
            }
          }
    });
}


export const ToolInit = function (net) {
    const addCustom1: any = document.querySelector('#addCustom1');
    const addCustom2: any = document.querySelector('#addCustom2');
    const addCustom3: any = document.querySelector('#addCustom3');
    const addCustom4: any = document.querySelector('#addHTML1');
    const drag: any = document.querySelector('#drag');
    const edit: any = document.querySelector('#edit');
    const default_: any = document.querySelector('#default');
    const test: any = document.querySelector('#test');
    const save: any = document.querySelector('#save');
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
    addCustom3.onclick = () => {
        console.info("添加自定义图形2")
        net.beginAdd('node', {
            shape: 'customNode3'
        });
    };
    addCustom4.onclick = () => {
        console.info("添加自定义图形2")
        net.beginAdd('node', {
            shape: 'customHtml1'
        });
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
        // createBasicNotification(json);
    };
    
          
    
    net.on('dragmove', function(ev){
        console.info("拖拽",ev)        
    });        // 拖拽中事件
    
    



    // function createBasicNotification(str) {
    //     this._notification.blank('保存成功', str);
    // }
}