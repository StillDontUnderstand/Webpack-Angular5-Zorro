import { NzNotificationService } from 'ng-zorro-antd';
import * as G6 from '@antv/g6';
import { Registed } from './graph-editor-shape'

const originalElement = {
    width: 0,
    height: 0,
    shape: ''
}
export const EditorInit = function (container) {
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
        width: window.innerWidth - 200,    // 画布宽
        height: window.innerHeight - 112,    // 画布高
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
    const drag: any = document.querySelector('#drag');
    const canvas = document.querySelectorAll('canvas');
    // console.info(canvas);
    //动态控制canvas尺寸
    canvas[0].style.width = '100%';
    // canvas[0].style.height = '100%';
    canvas[1].style.width = '100%';
    // canvas[1].style.height = '100%';
    const toolBar = document.getElementById('toolBar')

    toolBar.addEventListener('click', (ev) => {
        // console.info('click', ev);
        const target: any = ev.target
        if (target.classList.contains("after")) {
            var classList = toolBar.classList
            if (!classList.contains('toolShow')) {
                classList.add('toolShow');
                classList.remove('toolHide');

            } else {
                classList.remove('toolShow');
                classList.add('toolHide');
            }
        } else {
            //保存
            if (target.id == 'save') {
                const saveData = net.save();
                const json = JSON.stringify(saveData, null, 2);
                console.log(saveData, json); // eslint-disable-line no-console
                // createBasicNotification(json);
            }
            if (target.id == 'edit') {
                console.info("切换到编辑模式");
                net.changeMode('edit');
            }
            if (target.id == 'drag') {
                console.info("切换到拖拽模式");
                net.changeMode('drag');
            }
        }
    });
    toolBar.addEventListener('dragstart', (ev) => {
        const target: any = ev.target;

        originalElement.width = target.clientWidth;
        originalElement.height = target.clientHeight;
        originalElement.shape = target.id;
    });
    toolBar.addEventListener("dragend", function (ev) {
        // console.info('dragend', ev);
        const target: any = ev.target;
        // console.info('layer:(', ev.layerX, ',', ev.layerY, ')', 'screen(', ev.screenX, ',', ev.screenY, ')')
        // console.info('res:', 40 + ev.screenX * 1.022 - 216, ',', ev.layerY + 40 - 16 - 64);
        net.add('node', {
            shape: originalElement.shape,
            x: ev.screenX * 1.027 + originalElement.width / 2 - 220, //为矩形宽度的一半, 横坐标受元素原位置的影响，缩放系数1.027
            y: ev.screenY + originalElement.height / 2 - 80 - 152, // 拖拽的元素应该1:1与图形 16为上面的间隙 元素左上角坐标与client的相对纵坐标为-80
        })

    }, false);

    // drag.onclick = () => {
    //     console.info("切换到拖拽模式");
    //     net.changeMode('drag');  
    // };

    net.on('dragmove', function (ev) {
        console.info("拖拽", toolBar)
        var classList = toolBar.classList
        if (ev.x <= 300 && classList.contains('toolShow')) {
            console.info('触发toolbar返回')
            // toolBar.click();
            classList.remove('toolShow');
            classList.add('toolHide');
        }
    });        // 拖拽中事件

    // 开始拖拽事件
    // net.on('dragstart', function (ev) {
    //     console.info(ev);
    // });       

    // function createBasicNotification(str) {
    //     this._notification.blank('保存成功', str);
    // }
}
