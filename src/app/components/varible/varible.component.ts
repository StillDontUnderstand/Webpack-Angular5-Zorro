import { Component, OnInit } from '@angular/core';
// import { NavigationExtras } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';


@Component({
    // selector: 'varible',
    template: `
    <div style="padding:20px">
            <commonTable ></commonTable>
           <!-- <commonTable [InputData] = 'AJAX'></commonTable> -->
    </div>
    `,
    styles: [`
   
    `]
})
export class VaribleComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private http: Http,
    ) { }
    ngOnInit() {
        // this.route.paramMap.switchMap((params: ParamMap) => {
        //     console.info("切换路由事件");
        //     // this._loading = true;
        //     //清空数据会导致画面跳帧
        //     // this.data = []
        //     //数据加载完毕前load动画
        //     //切换路由触发数据请求
        //     return this.http.get('api/data' + params.get('id'))
        //     // 
        // }).subscribe((data) => {
        //     console.info('!!!!!!');
        //     // this.noData = [];
        //     // this.data = data.json();
        //     this.AJAX = data.json();
        //     //数据接受完毕取消加载动画
        //     // this._loading = false;
        //     console.info(this.AJAX);
        // })
    }
    // AJAX;
    

}