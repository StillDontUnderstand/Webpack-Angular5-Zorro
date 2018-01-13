import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
@Component({
    selector: 'devlog',
    template:
    `<div style="border-bottom: 1px solid #40404040;border-top-left-radius: 5px;border-top-right-radius: 5px;background-color:#f7f7f7;">
        <h1 style="padding: 0px 30px;">DevLog</h1>
    </div>
    <div style="padding:30px">
        <br>
        <p>12/13 搭建左侧菜单路由</p>
        <p>12/14 构建基本列表-模态页面</p>
        <p>12/15 添加mock API、</p>
        <p>12/16 模块复用模式、模块路由优化 </p>
        <h1>TODO</h1>
        <br>
        <p>编写开发文档</p>
        <button (click) = "getData();">测试</button>
        <br>
        <h1>Question</h1>
        <p>反向注入（子模块组件注入父级模块组件的情况）/不要用</p>
        <p>模糊滤镜在chrome浏览器下出现位移的bug</p>
    </div>
    `
    // styleUrls:['']
})
export class DevlogComponent implements OnInit {
    // 登录/注册 模态框
    constructor(private http: Http) { }
    ngOnInit() {

    }
}