import { Component, AfterViewInit } from '@angular/core';
import * as ECharts from 'echarts';

@Component({
    template: ``
})

export class LayerComponent implements AfterViewInit {
    ngAfterViewInit() {
        const myChart = ECharts.init(document.getElementById('main'));
        myChart.setOption(option);
    }
}

var value = [5, 8, 12, 14, 16, 18, 20, 22, 24, 26, 30];

var xAxisData = [];
var data = [];
var data2 = [];
for (var i = 0; i < 50; i++) {
    xAxisData.push(i);
    data.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
    data2.push((Math.sin(i / 5) * (i / 5 + 10) + i / 6) * 3);
}

var xAxisData = [];
var data = [];
var data2 = [];
for (var i = 0; i < 50; i++) {
    xAxisData.push(i);
    data.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
    data2.push((Math.sin(i / 5) * (i / 5 + 10) + i / 6) * 3);
}

const option = {
    backgroundColor: '#fff',
    xAxis: [{
        show: false,
        data: xAxisData
    }, {
        show: false,
        data: xAxisData
    }],
    visualMap: {
        show: false,
        min: 0,
        max: 50,
        dimension: 0,
        inRange: {
            color: ['#4a657a', '#308e92', '#b1cfa5', '#f5d69f', '#f5898b', '#ef5055']
        }
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#4a657a'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#08263f'
            }
        },
        axisTick: {
            show: false
        }
    },
    series: [
        {
            name: 'back',
            type: 'bar',
            data: data2,
            z: 1,
            itemStyle: {
                normal: {
                    opacity: 0.6,
                    barBorderRadius: 15,
                    shadowBlur: 3,
                    shadowColor: '#111'
                }
            }
        },
        {
            name: 'Simulate Shadow',
            type: 'line',
            data: data,
            z: 2,
            showSymbol: false,
            animationDelay: 0,
            animationEasing: 'linear',
            animationDuration: 1200,
            lineStyle: {
                normal: {
                    color: 'transparent'
                }
            },
            areaStyle: {
                normal: {
                    color: '#08263a',
                    shadowBlur: 50,
                    shadowColor: '#000'
                }
            }
        },
        {
            name: 'front',
            type: 'bar',
            data: data,
            xAxisIndex: 1,
            z: 3,
            itemStyle: {
                normal: {
                    barBorderRadius: 15,
                }
            }
        }
    ],
    animationEasing: 'elasticOut',
    animationEasingUpdate: 'elasticOut',
    animationDelay: function (idx) {
        return idx * 20;
    },
    animationDelayUpdate: function (idx) {
        return idx * 20;
    }
};