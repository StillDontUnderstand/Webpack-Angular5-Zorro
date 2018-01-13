import { trigger, animate, transition, style, query } from '@angular/animations';

export const fadeAnimation =

    trigger('fadeAnimation', [

        transition( '* => *', [

            query(':enter', 
                [
                    style({ opacity: 0 })
                ], 
                { optional: true }
            ),

            query(':leave', 
                [
                    style({ opacity: 1 }),
                    animate('0.5s 0.5s ease-in', style({ opacity: 0 }))
                ], 
                { optional: true }
            ),

            query(':enter', 
                [
                    style({ opacity: 0 }),
                    animate('0.5s 0.5s ease-in', style({ opacity: 1 }))
                ], 
                { optional: true }
            )

        ])

    ]);