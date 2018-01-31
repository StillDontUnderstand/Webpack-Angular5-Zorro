import { trigger, animate, transition, style, state, query, stagger } from '@angular/animations';

export const flyInOut = trigger('flyInOut', [
    transition('void => *', [
        style({ transform: 'translateX(-20%)', opacity: '0' }),
        animate(350,style({ transform: 'translateX(0)', opacity: '1' }))
    ]),
    transition('* => void', [
        style({ transform: 'translateY(0)', opacity: '1' }),
        animate(350, style({ transform: 'translateY(150%)', opacity: '0' }))
    ])
])

export const listFlyInOut = trigger('listFlyInOut', [
    
    transition('* => *', [ // each time the binding value changes
        query(':enter', [
            style({ opacity:'0'}),
            stagger(350, [
                style({ transform: 'translateX(-20%)', opacity: '0' }),
                animate(350,style({ transform: 'translateX(0)', opacity: '1' }))
            ])
        ], { optional: true }),
        query(':leave', [
            // style({ transform: 'translateY(0)',opacity: '1', }),
            stagger(-350, [
                style({ transform: 'translateY(0)', opacity: '1' }),
                animate(350,style({ transform: 'translateY(100%)', opacity: '0' }))
            ])
        ], { optional: true })
    ])
])