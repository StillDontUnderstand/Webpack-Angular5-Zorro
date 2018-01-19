import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
    selector:'root-header',
    // template:`
    // <nz-header style="background:#ececec; padding:0;">
    //     <div style="background-color:#404040;box-shadow: 0px 1px 1px 0px #0000007a, 0px 2px 4px 0px #00000052;">
    //     <span class="logo" style="color: white;padding: 0px 30px;">大数据前端开发框架演示</span>
    //     <span style="position: absolute;right: 72px;padding: 5px;">
    //     <nz-dropdown [nzTrigger]="'click'">
    //         <a href class="ant-dropdown-link" nz-dropdown>
    //             <i class="anticon anticon-user" style="font-size:24px;" ></i>
    //             Albert
    //         </a>
    //         <ul nz-menu>
    //             <li nz-menu-item>1st menu item</li>
    //             <li nz-menu-item>2nd menu item</li>
    //             <li nz-menu-item>3rd menu item</li>
    //         </ul>
    //     </nz-dropdown>
    //     </span>

    //     </div>
    // </nz-header>    
    // `,
    templateUrl:'header.html',
    styles:[`
        :host{
            z-index:100;
        }
        
        .ant-dropdown-menu-item, .ant-dropdown-menu-submenu-title {
    
            color: #53a4ff;
           
        }
        .ant-dropdown-menu-item-selected, .ant-dropdown-menu-submenu-title-selected, .ant-dropdown-menu-item-selected > a, .ant-dropdown-menu-submenu-title-selected > a {
            background-color: #ffffff00;
        }
    `]
})

export class HeaderComponent implements AfterViewInit{
    public avatarStyle = {
         "background-color": "rgb(64, 64, 64)",
        //  "box-shadow": "0px 0px 10px 1px #ffffff"
    }
    ngAfterViewInit(){

    }
    private UserOperate = function(){
        console.info("userOpserate")
    }
}