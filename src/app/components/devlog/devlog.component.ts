import { Component, OnInit, HostListener } from '@angular/core';


@Component({
    // selector: 'devlog',
    templateUrl:'./devlog.html',
    styles: [`
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