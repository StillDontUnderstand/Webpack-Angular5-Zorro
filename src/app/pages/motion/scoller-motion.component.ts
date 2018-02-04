import { Component, style } from '@angular/core';



@Component({
    selector:'scoller-motion',
    template: `
    <div class="item" ngsReveal>..</div>
    `,
    styles:[`
    :host{
        height:2000px;
    }
    `]
})

export class ListMotionComponent {
  
}

