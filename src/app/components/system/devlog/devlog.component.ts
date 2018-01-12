import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
@Component({
    selector: 'devlog',
    templateUrl: './devlog.component.html',
    // styleUrls:['']
})
export class DevlogComponent implements OnInit {
    // 登录/注册 模态框
    constructor(private http: Http) { }
    ngOnInit() {

    }
}