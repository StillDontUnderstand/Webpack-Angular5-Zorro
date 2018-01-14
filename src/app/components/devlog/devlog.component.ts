import { Component, OnInit, HostListener } from '@angular/core';

import { NavigationExtras } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';


@Component({
    // selector: 'devlog',
    template:
    `
    <div style="padding:30px" >
        <h1 >DevLog</h1>
        <br>
        <p >12/13 搭建左侧菜单路由</p>
        <p>12/14 构建基本列表-模态页面</p>
        <p>12/15 添加mock API、</p>
        <p>12/16 模块复用模式、模块路由优化 </p>
        <p>1/12 基础样式 </p>
        <p>1/13 路由切换过渡</p>
        <p>1/14 滚动监听</p>
        
        <h1>TODO</h1>
        <br>
        <p>路由切换事件</p>
        <p>路由切换scroll记忆消除</p>
        <p>编写开发文档</p>
        <p>封装数据异步加载模块</p>
        <p>可视化插件</p>
        <p>工程化打包测试</p>
        <button (click) = "getData();">测试</button>
        <br>
        <h1>Question</h1>
        <p>反向注入（子模块组件注入父级模块组件的情况）/不要用</p>
        <del>模糊滤镜在chrome浏览器下出现位移的bug</del>
    </div>
    `,
    styles: [`
        :host {
          position: absolute;
          width: calc(100% - 32px);
          height: auto;
          box-shadow: 0px 1px 20px 1px #00000059;
          background: #fff;
          margin: 16px 16px 30px 16px;
          z-index: 50;
          border-radius: 5px;
        }
     `]
})
export class DevlogComponent implements OnInit {
    // 登录/注册 模态框
    // constructor(private http: Http) { }
    ngOnInit() { }
    

}