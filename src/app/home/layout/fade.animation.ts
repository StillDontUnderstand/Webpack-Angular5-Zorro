import { trigger, animate, transition, style, query } from '@angular/animations';

export const fadeAnimation =

    trigger('fadeAnimation', [

        transition('* => *', [
            query(':enter',
                [
                    style({ opacity: 0 })
                ],
                { optional: true }
            ),
            query(':leave',
                [
                    style({ opacity: 1 }),
                    animate('0.55s ease-out', style({ opacity: 0 }))
                ],
                { optional: true }
            ),
            query(':enter',
                [
                    style({ opacity: 0 }),
                    animate('0.55s ease-in', style({ opacity: 1 }))
                ],
                { optional: true }
            )
        ])

    ]);

   
        
    