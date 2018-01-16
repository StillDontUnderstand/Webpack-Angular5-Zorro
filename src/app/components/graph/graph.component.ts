import { Component, AfterViewInit } from '@angular/core';
// import * as G6 from '@antv/g6';

@Component({
    template: `
    <div id="graph">
            <g6-net></g6-net>
        </div>
    `,
    styles: [`
        p{
            color:red;
        }
        :host {
            position: absolute;
            width: calc(100% - 32px);
            min-height: calc(100% - 48px);          
            box-shadow:0px 1px 11px 2px #00000059;
            background: #fff;
            margin: 16px 16px 32px 16px;
            z-index: 50;
            border-radius: 5px;
        }
    `]
})

export class GraphComponent implements AfterViewInit{
    ngAfterViewInit(){
        // console.info("aaaaa");
        // console.info(document.querySelector('#child'))
    }
}


