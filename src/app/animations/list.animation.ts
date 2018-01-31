import { trigger, animate, transition, style, state, stagger, query } from '@angular/animations';

export const listAnimation = trigger('listAnimation', [
    transition('* => *', [ // each time the binding value changes
       
        query(':enter', [
            style({ opacity: 0 }),
            stagger(350, [
                animate('0.5s', style({ opacity: 1 }))
            ])
        ],{optional:true}),
        query(':leave', [
            stagger(-350, [
                animate('0.5s', style({ opacity: 0 }))
            ])
        ],{optional:true})
    ])
])