/**
 * 页面布局：左导航、顶部导航条、Content
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'root-layout',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './layout.component.html',
  styleUrls: ['./style/style.css'],
})
export class LayoutComponent implements OnInit {
  ngOnInit(): void {

  }
  
}