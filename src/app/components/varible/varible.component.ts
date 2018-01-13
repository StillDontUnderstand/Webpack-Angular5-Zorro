import { Component, OnInit } from '@angular/core';
// import { NavigationExtras } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';


@Component({
    // selector: 'varible',
    template:`
    <div style="padding:0px">
            <commonTable></commonTable>
    </div>
    `,
    styles:[`
        :host{
            position:absolute;
            width:100%;
            height:100%;
        }
    `]
})
export class VaribleComponent implements OnInit {
  
    ngOnInit() {
    }
}