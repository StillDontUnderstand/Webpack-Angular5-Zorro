import { trigger, animate, transition, style, query } from '@angular/animations';

export const fadeAnimation =

    trigger('fadeAnimation', [

        transition( '* => *', [
            query(':enter', 
                [
                    style({ opacity: 0 ,boxShadow:'0px 0px 0px 0px white'})
                ], 
                { optional: true }
            ),
            query(':leave', 
                [
                    style({ opacity: 1 }),
                    animate('0.5s', style({ opacity: 0 ,boxShadow:'0px 0px 0px 0px white'}))
                ], 
                { optional: true }
            ), 
            query(':enter', 
                [
                    style({ opacity: 0 }),
                    animate('0.5s', style({ opacity: 1 }))
                ], 
                { optional: true }
            )

        ])

    ]);