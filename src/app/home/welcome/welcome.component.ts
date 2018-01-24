import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./style/style.css']
})
export class WelcomeComponent implements OnInit {
    // 登录/注册 模态框

    ngOnInit() {

    }
    constructor(private router:Router){}
    login = () => {
        this.router.navigateByUrl("app");
    }
}