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
    <!-- <div nz-row nzGutter="8" style="padding:10px;">
        <div nz-col [nzSpan]="24">
            <div style="float:right">
                <span varibleModal [obj]="{bn:'添加规则',code:'CREATE',data:''}"></span>
            </div>
        </div>
    </div> -->
    <div style="padding:0px">
            <!-- 输入变量 确定后台需要读取的数据 -->
            <commonTable ></commonTable>
    </div>
    `,
    // styleUrls:['']
})
export class VaribleComponent implements OnInit {
  
    ngOnInit() {
        // this.service.getHeroes(0).subscribe((data) => this.data = data)
        // this.httpTest();
        // console.info(this.route.routeConfig);    
        // this.httpTest(this.route.paramMap);
        
    }
}