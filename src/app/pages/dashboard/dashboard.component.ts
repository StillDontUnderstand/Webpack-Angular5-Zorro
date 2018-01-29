import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as ECharts from 'echarts';

@Component({
    templateUrl: 'dashboard.html',
    styles: [`
    :host{
        background-color: #ececec;
        box-shadow: 0px 0px 0px 0px;
    }
    .ant-calendar-picker {
        width: 468px
    }
    `]
})

export class DashboardComponent {
    _dateRange = [null, null];
    style1 = {
        backgroundColor: '#314659'
    }
    ngAfterViewInit() {
        var myChart1 = ECharts.init(document.getElementById('graph'));
        var myChart2 = ECharts.init(document.getElementById('graph2'));
        var myChart3 = ECharts.init(document.getElementById('graph3'));
        var myChart4 = ECharts.init(document.getElementById('graph4'));
        var myChart5 = ECharts.init(document.getElementById('graph5'));
        var myChart6 = ECharts.init(document.getElementById('graph6'));
        myChart1.setOption(this.option)
        myChart2.setOption(this.option)
        myChart3.setOption(this.option2)
        myChart4.setOption(this.option2)
        myChart5.setOption(this.option2)
        myChart6.setOption(this.option2)
    }

    option = {
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '60%',
                data: [10, 52, 200, 334, 390, 330, 220, 121, 232, 254, 75, 64]
            }
        ]
    };

    option2 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#ddd'
                }
            },
            backgroundColor: 'rgba(255,255,255,1)',
            padding: [5, 10],
            textStyle: {
                color: '#7588E4',
            },
            extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
        },
        xAxis: {
            type: 'category',
            data: ['00:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', "22:00"],
            boundaryGap: false,
            splitLine: {
                show: true,
                interval: 'auto',
                lineStyle: {
                    color: ['#D4DFF5']
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#609ee9'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14
                }
            }
        },
        yAxis: {
            type: 'value',
            splitLine: {
                lineStyle: {
                    color: ['#D4DFF5']
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#609ee9'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14
                }
            }
        },
        series: [{
            name: '今日',
            type: 'line',
            smooth: true,
            showSymbol: false,
            symbol: 'circle',
            symbolSize: 6,
            data: ['12', '14', '18', '14', '10', '12', '13', '8', '11', '10', '11', '13'],
            areaStyle: {
                normal: {
                    color: new ECharts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(199, 237, 250,0.5)'
                    }, {
                        offset: 1,
                        color: 'rgba(199, 237, 250,0.2)'
                    }], false)
                }
            },
            itemStyle: {
                normal: {
                    color: '#f7b851'
                }
            },
            lineStyle: {
                normal: {
                    width: 3
                }
            }
        }]
    };

}