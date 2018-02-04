import { Component, style } from '@angular/core';


@Component({
    template: `
    <h1>进出场动画</h1>
    <list-motion></list-motion>
    <fly-motion></fly-motion>
    <h1>页面滚动动画</h1>
    <scoller-motion></scoller-motion>

    `,
    styles: [`
    :host{
        padding:20px;
    }
    li{
        text-align:center;
        margin:5px;
        border:1px solid #ccc;
        border-radius:5px;
        box-shadow:0px 0px 0px 0px black;
    }
    div div{
        marging:10px;
        padding:10px;

        border-radius:5px;
    }
    li a{
        float:right;
    }
    `]
})

export class MotionComponent {

}