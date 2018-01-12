/**
 * 页面布局：左导航、顶部导航条、Content
 */
import { Component,OnInit,ViewEncapsulation } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
    selector: 'root-layout',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './layout.component.html',
    styleUrls:['./style/style.css']
})
export class LayoutComponent implements OnInit{ 
  constructor(private router: Router, private route: ActivatedRoute) {
    // console.info(this.router);
    console.info(this.route);
  }
    ngOnInit(): void {
        
    }

}