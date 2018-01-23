import { Component } from '@angular/core'

@Component({
    templateUrl:'./drag.html',
    styles:[`
    :host {
        position: absolute;
        width: calc(100% - 32px);
        box-shadow:0px 0px 6px 1px #00000042;
        background: #fff;
        margin: 16px 16px 30px 16px;
        z-index: 50;
        border-radius: 5px;
        min-height: calc(100% - 48px);          
      }
      .drag-container>div{
        margin:30px 240px;
        padding:20px;
        border:1px solid #ccc;
        border-radius:5px;
      }
      .dnd-drag-start {
        -moz-transform:scale(0.8);
        -webkit-transform:scale(0.8);
        transform:scale(0.8);
        opacity:0.7;
        border: 2px dashed #000;
    }
    
    .dnd-drag-enter {
        opacity:0.7;
        border: 2px dashed #000;
    }
    
    .dnd-drag-over {
        border: 2px dashed #000;
    }
    
    .dnd-sortable-drag {
      -moz-transform:scale(0.9);
      -webkit-transform:scale(0.9);
      transform:scale(0.9);
      opacity:0.7;
      border: 1px dashed #000;
    }
    `]
})
export class DragComponent { }