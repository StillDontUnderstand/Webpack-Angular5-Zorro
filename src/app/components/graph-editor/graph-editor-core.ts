import { NzNotificationService } from 'ng-zorro-antd';
import * as G6 from '@antv/g6';

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
    const edit: any = document.querySelector('#edit');
    const default_: any = document.querySelector('#default');
    const test: any = document.querySelector('#test');
    const save: any = document.querySelector('#save');
    const canvas = document.querySelectorAll('canvas');
    // console.info(canvas);
    //动态控制canvas尺寸
    canvas[0].style.width = '100%';
    // canvas[0].style.height = '100%';
    canvas[1].style.width = '100%';
    // canvas[1].style.height = '100%';

    document.querySelector('#toolBar').addEventListener('click',
        (ev) => {
            const target: any = ev.target
            console.info(ev)
            console.info(target)
            console.info(target.classList.contains('after'))
            //过滤非图形添加类按钮
            if (target.classList.contains("after")) {
                var toolBar = document.getElementById('toolBar')
                var classList = toolBar.classList
                if (!classList.contains('isShow')) {
                    classList.add('isShow');
                    classList.remove('notShow');

                } else {
                    classList.remove('isShow');
                    classList.add('notShow');

                }
            } else {
                if (target.id != "save") {
                    net.beginAdd('node', {
                        shape: "" + target.id
                    });
                }
            }


        }
    )

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
    save.onclick = () => {
        console.info("保存")
        const saveData = net.save();
        const json = JSON.stringify(saveData, null, 2);
        console.log(saveData, json); // eslint-disable-line no-console
        // createBasicNotification(json);
    };



    net.on('dragmove', function (ev) {
        console.info("拖拽", ev)
    });        // 拖拽中事件





    // function createBasicNotification(str) {
    //     this._notification.blank('保存成功', str);
    // }
}
