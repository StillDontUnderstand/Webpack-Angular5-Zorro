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
    :host {
        position: absolute;
        width: calc(100% - 32px);
        min-height: calc(100% - 48px);          
        box-shadow: 0px 1px 11px 2px #00000059;
        background: #fff;
        margin: 16px 16px 30px 16px;
        z-index: 50;
        border-radius: 5px;
      }
    `]
})
export class VaribleComponent implements OnInit {
  
    ngOnInit() {
    }
}