import * as G6 from '@antv/g6';

export const Registed = {

    Shape1: new G6.registerNode('customNode1', {
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
    }, 'rect'),

    Shape2: new G6.registerNode('customNode2', {
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
                    stroke: 'white',
                    opacity: 1
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
                    stroke: 'white',
                    opacity: 1
                }
            });
            group.addShape('text', {
                attrs: {
                    x: cfg.x - 40,
                    y: cfg.y - 25,
                    fill: '#333',
                    text: '自定义节点'
                }
            });
            return shape
        },
        //定义触点
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
    }, 'rect'),

    Shape3: new G6.registerNode('customNode3', {
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
                    stroke: 'white',
                    opacity: 1
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
                    stroke: 'white',
                    opacity: 1
                }
            });
            const shape3 = group.addShape('rect', {
                attrs: {
                    x: cfg.x - 40,
                    y: cfg.y - 40,
                    width: 80,
                    height: 15,
                    radius: 5,
                    fill: '#5bbee8',
                    stroke: '#5bbee8',
                    opacity: 1
                }
            });
            const shape4 = group.addShape('rect', {
                attrs: {
                    x: cfg.x - 40,
                    y: cfg.y - 30,
                    width: 80,
                    height: 5,
                    fill: '#5bbee8',
                    stroke: '#5bbee8',
                    opacity: 1
                }
            });
            group.addShape('text', {
                attrs: {
                    x: cfg.x - 40,
                    y: cfg.y - 25,
                    fill: '#333',
                    text: '自定义节点'
                }
            });
            return shape
        },
        //定义触点
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
    }, 'rect'),

    Shape4: new G6.registerNode('customNode4', {
        
    }, 'rect'),
}

