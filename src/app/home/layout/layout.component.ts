/**
 * 页面布局：左导航、顶部导航条、Content
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'root-layout',
  encapsulation: ViewEncapsulation.None,
  template: `
    <nz-layout style="height:100%;">
        <root-header style="position:fixed;width:100%"></root-header>
        <root-content style="position:relative;width:100%; height:calc(100% - 64px);top:64px;"></root-content>
    </nz-layout>
  `,
  styleUrls: ['./style/style.css'],
})
export class LayoutComponent implements OnInit {

  ngOnInit(): void {

  }

}