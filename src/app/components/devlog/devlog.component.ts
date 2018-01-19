import { Component, OnInit, HostListener } from '@angular/core';

import { NavigationExtras } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';


@Component({
    // selector: 'devlog',
    templateUrl:'./devlog.html',
    styles: [`
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
        code{
            color: #004280a6;
            font-weight: 700;
        }
        h1,p,del{
            text-align:center;
            margin:10px;
        }
     `]
})
export class DevlogComponent implements OnInit {
    // 登录/注册 模态框
    // constructor(private http: Http) { }
    ngOnInit() { }
    

}