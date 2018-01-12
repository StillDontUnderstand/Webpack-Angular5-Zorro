/**
 * 手机银行：客户中心 主界面
 */
import { Component,OnInit,ViewEncapsulation } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { Router,ActivatedRoute } from '@angular/router';

console.info("MbCcComponent in running");

@Component({
    selector: 'mb-cc',
    templateUrl: './mb-cc.component.html',
    styleUrls:['./style/style.css']
})
export class MbCcComponent implements OnInit {


  constructor(private router: Router, private route: ActivatedRoute) {
    console.info(this.router);
  }

  ngOnInit() {

  }    


}
